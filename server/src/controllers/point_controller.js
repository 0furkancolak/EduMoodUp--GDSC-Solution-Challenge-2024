//puanlama

const LES = require("../model/ders_model");
const POINT = require("../model/generalPoint_model");
const LESSONPOINT = require("../model/lessonPoint_model");
const STUDENT = require("../model/student_model");
const gemini = require("../utils/gemini")

const showpointinglesson = async (req, res) => {
  try {
    const { userid } = req.params;

    const student = await STUDENT.findOne({ ID: userid });
    let lessons = [];
    student.lesson.forEach(async (element) => {
      let id = element.lessonId;
      const pointabledata = await LESSONPOINT.findOne({
        lessonId: id,
        pointable: true,
      });
      lessons.push(pointabledata.lessonId);
    });
    let lessondata = [];
    lessons.forEach(async (element) => {
      const lessondatadb = await LES.findOne({ _id: element });
      lessondata.push(lessondatadb);
    });
    res.json(lessondata);
  } catch (error) {
    console.log(error);
  }
}; //öğrenciye puanlayabileceği dersleri gösteren fonksiyon

const pointingstatusweek = async (req, res) => {
  try {
    const { teacher } = req.params;

    const point = await LESSONPOINT.find({ lessonTeacher: teacher });
    let lessondata = [];
    point.forEach(async (element) => {
      let lessondatadb = await LES.findOne({ _id: element.lessonId });
      lessondata.push(lessondatadb);
    });
    res.json(point, lessondata);
  } catch (error) {
    console.log(error);
  }
}; //hocaya hafta haft verdiği derslerin puan durumunu verir

const getGemini = async (req, res) => {
  try {
    const { lessonid, week } = req.params
    const data = await LESSONPOINT.findOne({ week: week, lessonId: lessonid })
    const { heyacanOranı: lessonhey, mutlulukOranı: lessonmut, saskinlikOranı: lessonsas, yorgunlukOranı: lessonyor, endiseOranı: lessonen } = data
    const text = await gemini(mutlulukOranı, heyacanOranı, endiseOranı, saskinlikOranı, yorgunlukOranı)
    res.status(200).json({ text })
  } catch (error) {
    res.status(500)
    console.log(error);
  }
}

const generalpointstatus = async (req, res) => {
  const { teach } = req.params;
  const general = await POINT.findOne({ TEACHID: teach });

  res.json(general);
}; //hocaya tüm derslerin ortalamasıyla oluşan genel puanını verir

const pointing = async (req, res) => {
  const { lesson, status } = req.params;
  //statuslar sırayla 1:Mutluluk 2:Şaşkınlık 3:Yorgunluk 4: Heyecan 5: kaygı

  const lessondata = await LESSONPOINT.findOne({
    lessonId: lesson,
    pointable: true,
  });
  const general = await POINT.findOne({ TEACHID: lessondata.lessonTeacher });

  switch (status) {
    case 1:
      lessondata.lessonhey =
        (lessondata.lessonhey * lessondata.count + 3) / (count + 1);
      lessondata.lessonmut =
        (lessondata.lessonmut * lessondata.count + 5) / (count + 1);
      lessondata.lessonsas =
        (lessondata.lessonsas * lessondata.count + 2) / (count + 1);
      lessondata.lessonyor =
        (lessondata.lessonyor * lessondata.count + 1) / (count + 1);
      lessondata.lessonen =
        (lessondata.lessonen * lessondata.count + 1) / (count + 1);

      lessondata.count++;
      lessondata.save();

      general.generalhey =
        (general.generalhey * general.count + 3) / (count + 1);
      general.generalmut =
        (general.generalmut * general.count + 5) / (count + 1);
      general.generalsas =
        (general.generalsas * general.count + 2) / (count + 1);
      general.generalyor =
        (general.generalyor * general.count + 1) / (count + 1);
      general.generalen = (general.generalen * general.count + 1) / (count + 1);

      general.count++;
      general.generalpoint =
        (general.generalhey +
          general.generalmut +
          general.generalen +
          general.generalsas +
          general.generalyor) /
        5;
      general.save();
      break;
    case 2:
      lessondata.lessonhey =
        (lessondata.lessonhey * lessondata.count + 2) / (count + 1);
      lessondata.lessonmut =
        (lessondata.lessonmut * lessondata.count + 2) / (count + 1);
      lessondata.lessonsas =
        (lessondata.lessonsas * lessondata.count + 5) / (count + 1);
      lessondata.lessonyor =
        (lessondata.lessonyor * lessondata.count + 1) / (count + 1);
      lessondata.lessonen =
        (lessondata.lessonen * lessondata.count + 3) / (count + 1);

      lessondata.count++;
      lessondata.save();

      general.generalhey =
        (general.generalhey * general.count + 2) / (count + 1);
      general.generalmut =
        (general.generalmut * general.count + 2) / (count + 1);
      general.generalsas =
        (general.generalsas * general.count + 5) / (count + 1);
      general.generalyor =
        (general.generalyor * general.count + 1) / (count + 1);
      general.generalen = (general.generalen * general.count + 3) / (count + 1);

      general.count++;
      general.generalpoint =
        (general.generalhey +
          general.generalmut +
          general.generalen +
          general.generalsas +
          general.generalyor) /
        5;
      general.save();
      break;
    case 3:
      lessondata.lessonhey =
        (lessondata.lessonhey * lessondata.count + 1) / (count + 1);
      lessondata.lessonmut =
        (lessondata.lessonmut * lessondata.count + 1) / (count + 1);
      lessondata.lessonsas =
        (lessondata.lessonsas * lessondata.count + 1) / (count + 1);
      lessondata.lessonyor =
        (lessondata.lessonyor * lessondata.count + 5) / (count + 1);
      lessondata.lessonen =
        (lessondata.lessonen * lessondata.count + 2) / (count + 1);

      lessondata.count++;
      lessondata.save();

      general.generalhey =
        (general.generalhey * general.count + 1) / (count + 1);
      general.generalmut =
        (general.generalmut * general.count + 1) / (count + 1);
      general.generalsas =
        (general.generalsas * general.count + 1) / (count + 1);
      general.generalyor =
        (general.generalyor * general.count + 5) / (count + 1);
      general.generalen = (general.generalen * general.count + 2) / (count + 1);

      general.count++;
      general.generalpoint =
        (general.generalhey +
          general.generalmut +
          general.generalen +
          general.generalsas +
          general.generalyor) /
        5;
      general.save();
      break;
    case 4:
      lessondata.lessonhey =
        (lessondata.lessonhey * lessondata.count + 5) / (count + 1);
      lessondata.lessonmut =
        (lessondata.lessonmut * lessondata.count + 4) / (count + 1);
      lessondata.lessonsas =
        (lessondata.lessonsas * lessondata.count + 1) / (count + 1);
      lessondata.lessonyor =
        (lessondata.lessonyor * lessondata.count + 2) / (count + 1);
      lessondata.lessonen =
        (lessondata.lessonen * lessondata.count + 1) / (count + 1);

      lessondata.count++;
      lessondata.save();

      general.generalhey =
        (general.generalhey * general.count + 5) / (count + 1);
      general.generalmut =
        (general.generalmut * general.count + 4) / (count + 1);
      general.generalsas =
        (general.generalsas * general.count + 1) / (count + 1);
      general.generalyor =
        (general.generalyor * general.count + 2) / (count + 1);
      general.generalen = (general.generalen * general.count + 1) / (count + 1);

      general.count++;
      general.generalpoint =
        (general.generalhey +
          general.generalmut +
          general.generalen +
          general.generalsas +
          general.generalyor) /
        5;
      general.save();
      break;
    case 5:
      lessondata.lessonhey =
        (lessondata.lessonhey * lessondata.count + 1) / (count + 1);
      lessondata.lessonmut =
        (lessondata.lessonmut * lessondata.count + 1) / (count + 1);
      lessondata.lessonsas =
        (lessondata.lessonsas * lessondata.count + 3) / (count + 1);
      lessondata.lessonyor =
        (lessondata.lessonyor * lessondata.count + 2) / (count + 1);
      lessondata.lessonen =
        (lessondata.lessonen * lessondata.count + 5) / (count + 1);

      lessondata.count++;
      lessondata.save();

      general.generalhey =
        (general.generalhey * general.count + 1) / (count + 1);
      general.generalmut =
        (general.generalmut * general.count + 1) / (count + 1);
      general.generalsas =
        (general.generalsas * general.count + 3) / (count + 1);
      general.generalyor =
        (general.generalyor * general.count + 2) / (count + 1);
      general.generalen = (general.generalen * general.count + 5) / (count + 1);

      general.count++;
      general.generalpoint =
        (general.generalhey +
          general.generalmut +
          general.generalen +
          general.generalsas +
          general.generalyor) /
        5;
      general.save();
      break;
    default:
      break;
  }
};
