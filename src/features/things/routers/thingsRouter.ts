import { Router } from "express";
import ThingsController from "../controller/ThingsController.js";

const thingsRouter = Router();

const thingsController = new ThingsController();

thingsRouter.get("/", thingsController.getThings);

thingsRouter.get("/:thingId", thingsController.getThingById);

thingsRouter.delete("/:idThing", thingsController.deleteThingById);

thingsRouter.post("/", thingsController.addNewThing);

export default thingsRouter;
