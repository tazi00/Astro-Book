import express from "express";
import type { User } from "@astrobook/types";
import "dotenv/config";
import { pool } from "./db.js";

import { createGreeting } from "@astrobook/utils";
const app = express();
const port = 3001;

app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

app.get("/db-test", async (_, res) => {
  try {
    const result = await pool.query("select now()");
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "DB connection failed" });
  }
});

app.get("/users", async (_, res) => {
  try {
    const result = await pool.query('SELECT * FROM "user"');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.get("/greet", (_, res) => {
  const user: User = {
    id: "1",
    email: "test@astrobook.in",
  };

  const message = createGreeting(user.email);

  res.json({ message });
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
