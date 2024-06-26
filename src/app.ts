import express from "express";
import logger from "morgan";
import * as path from "path";
import ejs from "ejs";
import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";

export const app = express();

// Express configuration
app.set("port", process.env.PORT || 3800);

app.set("views", path.join(__dirname, "../views"));

app.set("view engine", "ejs");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use("/", index);

app.use(errorNotFoundHandler);
app.use(errorHandler);
