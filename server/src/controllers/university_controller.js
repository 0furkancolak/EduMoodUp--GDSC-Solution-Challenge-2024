const LES = require("../model/ders_model");
const BOL = require("../model/ders_model");
const FAK = require("../model/fak_model");
const UNI = require("../model/uni_model");
const { formatData } = require("../utils/universityLesson");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const WEEK = require("../model/weeklessonprograming_model");

//uni login işlemi de   --tamamlandı

const loginUniversity = async (req, res) => {
  const { email, password } = req.body;
  const universitycheck = await UNI.findOne({ email: email });
  if (!universitycheck) {
    return res.status(401);
  }
  if (universitycheck.emailconfirm == false) {
    res.status(401).json({
      msg: "Bu Email henüz doğrulanmamış",
    });
  } else {
    const sifreKontrol = await bcrypt.compare(
      password,
      universitycheck.password
    );
    if (!sifreKontrol) {
      res.status(401).json({
        msg: "Hatalı Şifre",
      });
    } else {
      res.status(200).json({
        msg: "Giriş Başarılı",
      });
    }
  }
};

const registerUniversity = async (req, res) => {
  const { name, password, email } = req.body;
  const unicontrol =
    (await UNI.findOne({ email: email })) ||
    (await UNI.findOne({ name: name }));

  if (unicontrol) {
    return res.status(401);
  }
  const newUser = new UNI({
    email: email,
    password: await bcrypt.hash(password, 10),
    name: name,
  });

  await newUser.save();

  const jwtBilgileri = {
    id: newUser.id,
    mail: newUser.email,
  };

  const jwtToken = jwt.sign(jwtBilgileri, process.env.CONFIRM_MAIL_JWT_SECRET, {
    expiresIn: "1d",
  });
  console.log(jwtToken);

  //MAIL GONDERME ISLEMLERI
  const url = process.env.WEB_SITE_URL + "univerify?id=" + jwtToken;
  console.log("gidilecek url:" + url);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_SIFRE,
    },
  });

  await transporter.sendMail(
    {
      from: "EduMoodUP <info@edumoodup.com",
      to: newUser.email,
      subject: "Emailiniz Lütfen Onaylayın",
      text:
        "Emailinizi onaylamak için lütfen şu linke tıklayınız: " + " " + url,
    },
    (error, info) => {
      if (error) {
        console.log("bir hata var" + error);
      }
      console.log("Mail gönderildi");
      console.log(info);
      transporter.close();
    }
  );
  //mobil uygulamaya yönlendirme

  return res.status(200);
};

const addFaculty = async (req, res) => {
  const { uniid, name } = req.body;

  const unicontrol = await UNI.findOne({ _id: uniid });
  let wrongfaculty = [];
  if (!unicontrol) {
    return res.status(401);
  }
  name.forEach(async (element) => {
    if (element == (await FAK.findOne({ name: element, UNIID: uniid }))) {
      wrongfaculty[wrongfaculty.length] = element;
    } else {
      const newUser = new FAK({
        UNIID: uniid,
        name: element,
      });

      await newUser.save();
    }
    res.status(200).json({ wrongfaculty });
  });
};

//üniversite id'sine göre fakülteleri getirme işlemi --tamamlandı
const getFaculty = async (req, res) => {
  const { id } = req.params;
  try {
    const faculty = await FAK.find({ UNIID: id });
    res.json(faculty);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const editFaculty = async (req, res) => {
  const { id, name } = req.body;
  try {
    await FAK.findByIdAndUpdate(id, { name: name });
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const deleteFaculty = async (req, res) => {
  const { id } = req.params;
  try {
    await FAK.findByIdAndDelete(id);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

//fakülte id'sine göre department getirme işlemi --tamamlandı
const getDepartment = async (req, res) => {
  const { id } = req.params;
  try {
    const department = await BOL.find({ FAKID: id });
    res.json(department);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const editDepartment = async (req, res) => {
  const { id, name } = req.body;
  try {
    await BOL.findByIdAndUpdate(id, { name: name });
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const deleteDepartment = async (req, res) => {
  const { id } = req.params;
  try {
    await BOL.findByIdAndDelete(id);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const addDepartment = async (req, res) => {
  const { fakid, name } = req.body;

  const fakcontrol = await FAK.findOne({ _id: fakid });
  let wrongdepartment = [];
  if (!fakcontrol) {
    return res.status(401);
  }
  name.forEach(async (element) => {
    if (element == (await BOL.findOne({ name: element, FAKID: fakid }))) {
      wrongdepartment[wrongdepartment.length] = element;
    } else {
      const newUser = new BOL({
        FAKID: fakid,
        name: element,
      });

      await newUser.save();
    }
    res.status(200).json({ wrongdepartment });
  });
};

const addLessons = async (req, res) => {
  const { data, bolid } = req.body;
  try {
    const formattedData = formatData(data);
    const maindata = JSON.stringify(formattedData);
    maindata.forEach(async (element) => {
      element.lesson.forEach(async (element2) => {
        const lessoncontrol = await LES.findOne({ name: element2.name });
        if (!lessoncontrol) {
          const newUser = await new LES({
            BOLID: bolid,
            name: element2.name,
            time: element2.time,
            day: element2.day,
          });
          const newWeek = await new WEEK({
            LESSONID: newUser.id,
            lessonday: element2.day,
            lessontime: element2.time,
          });
          await newWeek.save();
        } else {
          const newWeek = await new WEEK({
            LESSONID: lessoncontrol._id,
            lessonday: element2.day,
            lessontime: element2.time,
          });
          await newWeek.save();
        }
      });
    });
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(401);
  }
};

const deleteLessons = async (req, res) => {
  const { id } = req.params;
  try {
    await LES.findByIdAndDelete(id);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  addLessons,
  addDepartment,
  addFaculty,
  registerUniversity,

  editFaculty,
  getFaculty,
  deleteFaculty,
  editDepartment,
  deleteDepartment,
  deleteLessons,
  getDepartment,
};
