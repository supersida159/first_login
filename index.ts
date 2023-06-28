import { Request,Response, urlencoded } from "express";
import express from "express"
import useRouter from "./router/user.router"

const app = express();
const port = 3000;

app.set("views","views");
app.set("view engine", "ejs")

app.use(express.json())
    .use(express.urlencoded({ extended: true }))

app.use('/', useRouter);
  
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });