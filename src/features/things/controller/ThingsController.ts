import { type Request, type Response } from "express";
import type { ByThingIdParams, ThingWhitoutId } from "../types.js";
import ThingsRepository from "../repository/ThingsRepository.js";

const thingsRepository = new ThingsRepository();

class ThingsController {
  public getThings(_req: Request, res: Response) {
    const things = thingsRepository.getThings();
    res.status(200).json({ things });
  }

  public getThingById(req: ByThingIdParams, res: Response) {
    const { thingId } = req.params;
    try {
      const thing = thingsRepository.getThingById(+thingId);
      res.status(200).json({ thing });
    } catch {
      res.status(404).json({ error: "Thing not found" });
    }
  }

  public deleteThingById(req: ByThingIdParams, res: Response) {
    const { thingId } = req.params;
    try {
      thingsRepository.deleteThingById(+thingId);
      res.status(200).json({});
    } catch {
      res.status(404).json({ error: "Thing not found" });
    }
  }

  public addNewThing(
    req: Request<
      Record<string, unknown>,
      Record<string, unknown>,
      ThingWhitoutId
    >,
    res: Response
  ) {
    const thingWithoutId = req.body;
    try {
      const thing = thingsRepository.addThing(thingWithoutId);
      res.status(201).json({ thing });
    } catch {
      res.status(404).json({ error: "Couldn't add the new thing" });
    }
  }
}

export default ThingsController;
