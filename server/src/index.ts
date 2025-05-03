import express from "express";
import dotenv from "dotenv";
import cors, { CorsOptions } from "cors";
import errorHandler from "./middlewares/errorHandler";
import dbConnect from "./utils/dbConnect";
import { notesRouter } from "./routes/note";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

dbConnect();

app.use("/api/notes/", notesRouter);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
