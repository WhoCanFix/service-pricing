import express from "express";
import bodyParser from "body-parser";
import getDbInstance from "./db/index";
import cors from "cors";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/quotes", async (req, res) => {
  const { make, fuelType } = req.body;
  const db = await getDbInstance();
  const quotes = await db.all(
    `SELECT * FROM Prices WHERE make='${make}' AND fuelType = '${fuelType}'`
  );
  return res.json(quotes);
});

app.get("/cars/:vrm", async (req, res) => {
  const db = await getDbInstance();
  const car = await db.get(
    `SELECT * FROM Cars WHERE vrm = '${req.params.vrm}'`
  );
  return res.json(car);
});

export default app;
