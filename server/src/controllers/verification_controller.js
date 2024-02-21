// Üniversite onaylaması / Ders öğrenci onaylama / Üniversite hoca onaylama /

const LES = require("../model/ders_model");
const STUDENT = require("../model/student_model");
const TEACH = require("../model/teach_model");
const UNI = require("../model/uni_model");
const User = require("../model/user");

const uniconfirm = async (req, res) => {
  const uniid = req.body.uniid;

  const unicontrol = await UNI.findOneAndUpdate(uniid, {
    adminconfirm: true,
  });
  if (unicontrol) {
    res.status(200);
  } else {
    res.status(401);
  }
};
const lessonstudentconfirm = async (req, res) => {
  const { ogrid, dersid, operation } = req.body;
  if (operation == true) {
    ogrid.forEach(async (element) => {
      const studentcontrol = await STUDENT.findOne({ _id: element });
      if (studentcontrol) {
        studentcontrol.lesson.forEach(async (element2) => {
          if (element2.lessonId == dersid) {
            element2.verification = true;
            await studentcontrol.save();
            return;
          }
        });
      }
    });
  } else {
    let studentcontrol = await STUDENT.findOne({ _id: ogrid });
    if (studentcontrol) {
      const newdata = studentcontrol.lesson.filter(
        (item) => item.lessonId !== dersid
      );
      studentcontrol.lessonstudents = newdata;
      studentcontrol.save();
    }
  }
};
const uniteacherconfirm = async (req, res) => {
  const { teacherid, operation } = req.body;

  if (operation == true) {
    teacherid.forEach(async (element) => {
      const unicontrol = await User.findOneAndUpdate(element, {
        UniversityVerification: true,
      });
      if (unicontrol) {
        res.status(200);
      } else {
        res.status(401);
      }
    });
  } else {
    const user = await User.findByIdAndRemove({ _id: teacherid });
    if (user) {
      res.status(200);
    } else {
      res.status(401);
    }
  }
};

const emailconfirm = async (req, res) => {
  if (role == "university") {
    const token = req.query.id;
    if (token) {
      try {
        jwt.verify(
          token,
          process.env.CONFIRM_MAIL_JWT_SECRET,
          async (e, decoded) => {
            if (e) {
              res.status(401);
            } else {
              const tokenIcindekiIDDegeri = decoded.id;
              const sonuc = await UNI.findByIdAndUpdate(tokenIcindekiIDDegeri, {
                emailconfirm: true,
              });

              if (sonuc) {
                res.status(200);
              } else {
                res.status(401);
              }
            }
          }
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      res.status(404).json({
        msg: "Link geçersiz",
      });
    }
  } else {
    const token = req.query.id;
    if (token) {
      try {
        jwt.verify(
          token,
          process.env.CONFIRM_MAIL_JWT_SECRET,
          async (e, decoded) => {
            if (e) {
              res.status(404).json({
                msg: "Bu link hatalı yada süresi geçmiş",
              });
            } else {
              const tokenIcindekiIDDegeri = decoded.id;
              const sonuc = await User.findByIdAndUpdate(
                tokenIcindekiIDDegeri,
                {
                  EmailVerification: true,
                }
              );
              if (sonuc.role == "student") {
                const newUser = new STUDENT({
                  ID: sonuc._id,
                  lesson: [],
                });

                await newUser.save();
              } else {
                const newUser = new TEACH({
                  ID: sonuc._id,
                });
                await newUser.save();
              }
              if (sonuc) {
                res.status(200).json({
                  msg: "Mail Onaylandı",
                });
              } else {
                res.status(404).json({
                  msg: "Lütfen tekrar kullanıcı oluşturun",
                });
              }
            }
          }
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      res.status(404).json({
        msg: "Link geçersiz",
      });
    }
  }
};
module.exports = {
  uniconfirm,
  lessonstudentconfirm,
  uniteacherconfirm,
  emailconfirm,
};
