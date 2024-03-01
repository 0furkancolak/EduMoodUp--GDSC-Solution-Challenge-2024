const express = require("express");
const path = require("path");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();

/*const checkRatingAvailability = (req, res, next) => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Gelen saat bilgisi (örneğin "09:00" gibi)
  const incomingTime =   ;
  const [incomingHour, incomingMinute] = incomingTime.split(":").map(Number);

  // Gelen saate 1 saat 30 dakika ekleyerek kapanma saati hesapla
  const closingHour = incomingHour + 1;
  const closingMinute = incomingMinute + 30;

  // GMT+3'e göre saatleri güncelle
  const adjustedClosingHour = closingHour + 3;

  // Eğer kapanma saati geçmemişse devam et
  if (
    currentHour < adjustedClosingHour ||
    (currentHour === adjustedClosingHour && currentMinute <= closingMinute)
  ) {
    next();
  } else {
    res.status(403).send("Puanlama sistemi şu anda kapalı.");
  }
};*/

// Middleware'ı tüm rotalarda kullan
setInterval(async () => {
  var bugun = new Date();

  // Haftanın günlerini tanımla
  var gunler = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  // Bugünün hangi gün olduğunu al
  var bugununGunu = gunler[bugun.getDay()];
  const currentHour = bugun.getHours();
  const currentMinute = bugun.getMinutes();
  const lesson = await LES.find();
  // Gelen saat bilgisi (örneğin "09:00" gibi)
  lesson.forEach(async (element) => {
    const incomingTime = element.time;
    const [incomingHour, incomingMinute] = incomingTime.split(":").map(Number);

    if (
      incomingHour >= currentHour &&
      incomingMinute >= currentMinute &&
      incomingHour < currentHour + 2 &&
      incomingMinute < currentMinute + 30 &&
      element.day == bugununGunu
    ) {
      const pointcontrol = await LESSONPOINT.find({ lessonId: element._id });
      const newUser = new LESSONPOINT({
        lessonTeacher: element.TEACHERID,
        week: pointcontrol.length + 1,
        lessonId: element._id,
      });
      const week = await WEEK.find({ LESSONID: element._id });

      if (week.length > 1) {
        week.forEach(async (element2) => {
          if (element2.lessonday != element.day) {
            element.day = element2.lessonday;
            element.time = element2.lessontime;
            await lesson.save();
          }
        });
      }
      await newUser.save();
    } else if (
      incomingHour >= currentHour + 2 &&
      incomingMinute >= currentMinute + 30 &&
      element.day == bugununGunu
    ) {
      const updatepoint = await LESSONPOINT.findOne({
        lessonId: element._id,
        pointable: true,
      });

      if (updatepoint) {
        updatepoint.pointable = false;
        await updatepoint.save();
      }
    }
  });
}, 10000);
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//db 
require("./src/config/database");

//routers
const universityRouter = require("./src/routers/university_router");
const studentRouter = require("./src/routers/student_router");
const teacherRouter = require("./src/routers/teacher_router");
const adminRouter = require("./src/routers/admin_router");
const authRouter = require("./src/routers/auth_router");
const LES = require("./src/model/ders_model");
const LESSONPOINT = require("./src/model/lessonPoint_model");
const WEEK = require("./src/model/weeklessonprograming_model");

app.use("/university", universityRouter);
app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);
app.use("/admin", adminRouter);
app.use("/auth", authRouter);

app.listen(process.env.PORT, async () => {
  console.log(`Server ${process.env.PORT} portundan ayaklandı`);
});
