import { Router } from "express";
import PingController from "../controller/PingController";
import app from "../../../app";

const pingRouter = Router();

const pingController = new PingController();

app.use("/", pingController.getPong);

export default pingRouter;
