import morgan from "morgan";
import app from "./app.js";
import thingsRouter from "./features/things/routers/thingsRouter.js";

app.use(morgan("dev"));

app.use("/things", thingsRouter);
