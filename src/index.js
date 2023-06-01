import express from "express";
import cors from "cors";
import "./models";
import Router from "./routes/index";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("", Router);

app.listen(3000, function () {
  console.log("running on port 3000 ");
});
