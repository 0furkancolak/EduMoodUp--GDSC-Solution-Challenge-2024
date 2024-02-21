const router = require("express").Router();
const UniController = require("../controllers/university_controller");

// univerify routerı eklenecek

//Üniversite login routerı da eklenecek --yapılacak
router.post("/register", UniController.registerUniversity);

router.get("/get-faculty/:id", UniController.getFaculty)
router.get("/get-department/:id", UniController.getDepartment)

router.post("/add-faculty", UniController.addFaculty)
router.post("/add-department", UniController.addDepartment)
router.post("/add-lesson", UniController.addLessons)

router.post("/edit-faculty", UniController.editFaculty)
router.post("/edit-department", UniController.editDepartment)

router.delete("/delete-faculty/:id", UniController.deleteFaculty)
router.delete("/delete-department/:id", UniController.deleteDepartment)
router.delete("/delete-lesson/:id", UniController.deleteLessons)


module.exports = router;