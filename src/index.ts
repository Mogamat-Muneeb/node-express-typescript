import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 9000;

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server 🤲");
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
