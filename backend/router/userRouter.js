import express from "express";
import { 
    addNewAdmin  ,getAllDoctors ,login,patientRegister, getUserDetails ,logoutAdmin, logoutPatient , addNewDoctor} from "../controller/userController.js";
   
   
import { isAdminAuthenticated,isPatientAuthenticated } from "../middlewares/auth.js";
const router =express.Router();

router.post("/patient/register",patientRegister);
router.post("/login",login);
// router.post("/login/admin",isAdminAuthenticated,addNewAdmin);
router.post("/admin/addnew",isAdminAuthenticated,addNewAdmin);
router.get("/doctors",getAllDoctors);
router.get("/admin/me",isAdminAuthenticated,getUserDetails);
router.get("/patient/me",isPatientAuthenticated,getUserDetails);
router.get("/admin/logOut",isAdminAuthenticated,logoutAdmin);
router.get("/patient/logOut",isPatientAuthenticated,logoutPatient);
router.post("/doctor/addnew",isAdminAuthenticated,addNewDoctor);
export default router;