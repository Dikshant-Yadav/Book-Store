import express, { request } from "express";
import { PORT, mongoBDURL } from "./config.js";
const app = express();
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

//middleware for parsing request body
app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome to MERN stack tutorial");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoBDURL)
  .then(() => {
    console.log("app connecteed to DB");
    app.listen(PORT, () => {
      console.log(`app is listening at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    console.log("dikkat hai");
  });
