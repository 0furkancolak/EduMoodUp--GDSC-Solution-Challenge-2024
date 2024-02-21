const router = require("express").Router();
const authController = require("../controllers/auth_controller");

// biz headersdan role bilgisini göndereceğiz ona göre role bilgisi eklenecek
router.post("/login", authController.login);

//kayıt işlemlerini mail ile yapmak en mantıklısı
router.post("/register", authController.register);

module.exports = router;
