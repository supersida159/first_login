import express from "express";
var router = express.Router();
import { login,postlogin } from "../controller/login.controller";

router.get("/login",login)
        .post("/login",postlogin)

export default router