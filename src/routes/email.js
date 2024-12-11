import { Router } from "express";
import { sendEmailController } from "../controller/email.js";

const router = Router();

router.post("/email", sendEmailController);

export default router;
