import things from "../data/things.js";
import type { Thing, ThingWhitoutId } from "../types";

class ThingsRepository {
  public getThings(): Thing[] {
    return things;
  }

  public getThingById(thingId: number): Thing {
    const thing = things.find((thing) => thing.id === thingId);

    if (!thing) {
      throw new Error("Thing not found");
    }

    return thing;
  }

  public deleteThingById(thingId: number): void {
    const thingIndex = things.findIndex((thing) => thing.id === +thingId);
    if (thingIndex === -1) {
      throw new Error("Thing not found");
    }

    things.splice(thingIndex, 1);
  }

  public addThing(thingWhitoutId: ThingWhitoutId): Thing {
    const newThing: Thing = {
      ...thingWhitoutId,
      id:
        things.reduce(
          (acumulator, thing) =>
            thing.id > acumulator ? thing.id : acumulator,
          0
        ) + 1,
    };
    things.push(newThing);
    return newThing;
  }
}

export default ThingsRepository;
