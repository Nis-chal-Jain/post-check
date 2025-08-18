dotenv.config({ path: "./.env" });
console.log(process.env.DB_USER);

import express from "express";
import pool from "./db/db_connect.js";
import dotenv from "dotenv";

const app = express();

app.use(express.json());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
