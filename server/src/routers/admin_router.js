const router = require("express").Router();
const adminController = require("../controllers/admin_controller");
//deleteuser , panelveri ,

router.get("/get-university", adminController.getAllUniversity);
router.get("/get-university/:id", adminController.getOneUniversity);
router.get("/get-university/:uniid/:fakid", adminController.getOneFaculties);
router.post("/delete-university", adminController.postUniDelete);

router.get("/all-user", adminController.getAllUser);
router.post("/delete-user", adminController.postUserDelete);

router.post("/admin-login", adminController.loginAdmin);

//Postmandan adminleri oluşturduktan sonra yorum satırına alınacak
router.post("/admin-register", adminController.registerAdmin);

module.exports = router;
