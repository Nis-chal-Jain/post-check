// db.js
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

(async () => {
  try {
    const conn = await pool.getConnection();
    console.log("Database connected successfully!");
    conn.release();
  } catch (err) {
    console.error("Database connection error:", err.message);
  }
})();

export default pool;
