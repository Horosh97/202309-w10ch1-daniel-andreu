import { type Request } from "express";

export type ByThingIdParams = Request<{ thingId: string }>;

export interface Thing {
  id: number;
  name: string;
  difficulty: string;
}

export type ThingWhitoutId = Omit<Thing, "id">;
