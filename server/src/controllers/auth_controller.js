const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const usercontrol = await User.findOne({ email: email });

    if (!usercontrol) {
      res.status(404).json({
        msg: "Bu Email e sahip bir kullanıcı bulunamadı",
      });
    } else {
      if (usercontrol.EmailVerification == false) {
        res.status(404).json({
          msg: "Bu Email henüz doğrulanmamış",
        });
      } else {
        const sifreKontrol = await bcrypt.compare(
          password,
          usercontrol.password
        );
        if (!sifreKontrol) {
          res.status(404).json({
            msg: "Hatalı Şifre",
          });
        } else {
          res.status(200).json({
            msg: "Giriş Başarılı",
          });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    const _user = await User.findOne({ email: req.body.email });
    if (_user && _user.EmailVerification) {
      res.status(404).json({
        msg: "Bu Email e sahip bir kullanıcı bulunmakta",
      });
    } else {
      if (_user && _user.EmailVerification == false) {
        await User.findByIdAndRemove({ _id: _user._id });
      }
      const newUser = new User({
        email: req.body.email,
        fullName: req.body.fullName,
        password: await bcrypt.hash(req.body.password, 10),
        role: req.body.role,
        studentNumber: req.body.studentNumber,
      });

      if (req.body.role == "student") {
        newUser.UniversityVerification = true;
      }

      await newUser.save();

      const jwtBilgileri = {
        id: newUser.id,
        mail: newUser.email,
      };

      const jwtToken = jwt.sign(
        jwtBilgileri,
        process.env.CONFIRM_MAIL_JWT_SECRET,
        { expiresIn: "1d" }
      );
      console.log(jwtToken);

      //MAIL GONDERME ISLEMLERI
      const url = process.env.WEB_SITE_URL + "verify?id=" + jwtToken;
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
            "Emailinizi onaylamak için lütfen şu linke tıklayınız: " +
            " " +
            url,
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
      res.status(200).json({
        msg: "Lütfen Mail adresinizi kontrol ediniz",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

//forget-password
module.exports = {
  login,
  register,
};
