import { Router } from "express";
import things from "../data/things.js";
import type { Thing } from "../../../types.js";

const thingsRouter = Router();

thingsRouter.get("/", (_req, res) => {
  res.status(200);
  res.json({ things });
});

thingsRouter.get("/:thingId", (req, res) => {
  const { thingId } = req.params;

  const thing = things.find((thing: Thing) => thing.id === +thingId);

  if (!thing) {
    res.status(404).json({ error: "Thing not found" });
    return;
  }

  res.status(200).json({ thing });
});

thingsRouter.delete("/:idThing", (req, res) => {
  const id = req.params.idThing;

  const thingIndex = things.findIndex((thing) => thing.id === +id);

  if (thingIndex === -1) {
    res.status(404).json({});
    return;
  }

  things.splice(thingIndex, 1);

  res.status(200).json({});
});

export default thingsRouter;
