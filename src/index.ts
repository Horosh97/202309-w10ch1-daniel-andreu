import morgan from "morgan";
import app from "./app.js";
import pingRouter from "./features/ping/router/pingRouter.js";
import thingsRouter from "./features/things/routers/thingsRouter.js";
import express from "express";
import { notFound } from "./features/middleware/error/middlewareError.js";

app.use(morgan("dev"));

app.use(express.json());

app.use("/things", thingsRouter);
app.use("/", pingRouter);
app.use(notFound);
