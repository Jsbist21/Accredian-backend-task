import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import referralRoutes from "./routes/referralRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", referralRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
