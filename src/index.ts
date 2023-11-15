import morgan from "morgan";
import app from "./app.js";
import thingsRouter from "./features/things/routers/thingsRouter.js";
import express from "express";
import pingRouter from "./features/ping/router/pingRouter.js";

app.use(express.json());
app.use(morgan("dev"));

app.use("/", pingRouter);
app.use("/things", thingsRouter);
