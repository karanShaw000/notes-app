import express from "express";
import dotenv from "dotenv";
import cors, { CorsOptions } from "cors";
import errorHandler from "./middlewares/errorHandler";
import dbConnect from "./utils/dbConnect";
import { notesRouter } from "./routes/note";

dotenv.config();
const port = process.env.PORT || 5000;
const fronendUrl = process.env.FRONTEND_URL as string;
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  fronendUrl,
];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    const env = process.env.NODE_ENV;

    if (env === "development") {
      // Allow all in dev mode
      callback(null, true);
    } else {
      // Production: allow only whitelisted domains
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  },
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

dbConnect();

app.use("/api/notes/", notesRouter);

app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
