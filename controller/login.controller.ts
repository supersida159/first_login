import { Request, Response } from "express";
import db from "../db";
import { errors } from "../constain/const";

export const login = (req: Request, res: Response) => {
  res.render('user/login', { errors: errors });
}

export const postlogin = (req: Request, res: Response) => {
  let username = req.body.email;
  let password = req.body.Username;
  let user = db.get('users').find({username: username}).value();
  if (!user) {
    res.render('user/login', { errors: ['User does not exist.'], values: req.body });
  } else if (user.password !== password) {
    res.render('user/login', { errors: ['Wrong password.'], values: req.body });
  } else {
    // Redirect the user to a different route after successful login
    res.redirect('/dashboard');
  }
}
