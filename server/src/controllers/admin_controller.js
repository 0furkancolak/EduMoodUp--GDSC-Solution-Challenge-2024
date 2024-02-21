const UNI = require("../model/uni_model");
const User = require("../model/user");
const Admin = require("../model/admin_model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const FAK = require("../model/fak_model");

//admin register işlemini bir kere postmandan herkese hesap açıp bu kısmı yorum satırına alacağız
const registerAdmin = async (req, res) => {
  try {
    const _user = await Admin.findOne({ email: req.body.email });
    if (_user) {
      return res.status(404).json({
        msg: "Bu Email e sahip bir kullanıcı bulunmakta",
      });
    }
    const newUser = new Admin({
      email: req.body.email,
      fullName: req.body.fullName,
      password: await bcrypt.hash(req.body.password, 10),
    });

    await newUser.save();

    res.status(200).json({
      msg: "Başarıyla oluşturuldu",
    });
  } catch (error) {
    console.log(error);
  }
};

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admincontrol = await User.findOne({ email: email });

    if (!admincontrol) {
      return res.status(401).json({
        msg: "Hatalı email",
      });
    }

    const passKontrol = await bcrypt.compare(password, admincontrol.password);

    if (!passKontrol) {
      return res.status(404).json({
        msg: "Hatalı Şifre",
      });
    }

    res.status(200).json({
      msg: "Giriş Başarılı",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const getAllUniversity = async (req, res) => {
  try {
    const data = await UNI.find();
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const postUniDelete = async (req, res) => {
  const { id } = req.body;
  try {
    await UNI.findByIdAndDelete(id), res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

//data olarak o id'li üniversitenin fakülteleri de gidecek --tamamlandı
const getOneUniversity = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await UNI.findById(id);
    const fakdata = await FAK.find({ UNIID: id });
    res.status(200).json({ data, fakdata });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const getOneFaculties = async (req, res) => {
  const { uniid, fakid } = req.params;
  try {
    const thisfaculty = await FAK.findOne({ _id: fakid, UNIID: uniid });
    res.json(thisfaculty);
    //data olarak o üniversitenin o id'sindeki fakülte gönderilecek --tamamlandı
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

//fakülte silme işlemi de tamamlandı
const postDeleteFaculty = async (req, res) => {
  try {
    const { id } = req.query;
    const faculty = await FAK.findOneAndRemove({ _id: id });
    if (faculty) {
      return res.status(200);
    }
    return res.status(401);
  } catch (error) {
    console.log(error);
  }
};

const getAllUser = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).send({ data });
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

const postUserDelete = async (req, res) => {
  const { id } = req.body;
  try {
    await User.findByIdAndDelete(id), res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports = {
  getAllUniversity,
  getOneUniversity,
  getOneFaculties,
  getAllUser,
  postUniDelete,
  postUserDelete,
  registerAdmin,
  loginAdmin,
  postDeleteFaculty,
};
