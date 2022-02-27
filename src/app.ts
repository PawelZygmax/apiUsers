import express, { Application } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import userRoutes from "./routes/users.route";
import authRoutes from "./routes/auth.route";
import { errorHandling } from "./middlewares/errorHandling";
import { ConnectOptions } from "mongodb";
import auth from "./middlewares/auth";

const app: Application = express();

app.use(bodyParser.json());

app.use("/api/users", auth, userRoutes);
app.use("/api/auth", authRoutes);

app.use(errorHandling);

const url = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.MONGO_ATLAS_PW}@serverlessinstance0.cfuzw.mongodb.net/db?retryWrites=true&w=majority`;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)
  .then(() => {
    app.listen(5000, () => {
      console.log("server is up and running");
    });
  })
  .catch((e) => console.log(e));
