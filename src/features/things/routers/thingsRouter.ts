import { Router } from "express";
import things from "../data/things.js";

const thingsRouter = Router();

thingsRouter.get("/", (_req, res) => {
  res.status(200);
  res.json({ things });
});

export default thingsRouter;
