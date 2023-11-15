import { Router } from "express";
import PingController from "../controller/PingController.js";
import app from "../../../app.js";

const pingRouter = Router();

const pingController = new PingController();

app.use("/", pingController.getPong);

export default pingRouter;
