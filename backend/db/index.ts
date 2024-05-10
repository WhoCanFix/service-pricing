import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default () => {
  return open({
    filename: "./db/database.db",
    driver: sqlite3.Database,
  });
};

export const init = async (db: any) => {

    await db.exec(`CREATE TABLE IF NOT EXISTS Cars (
      id int,
      vrm varchar(255),
      make varchar(255),
      model varchar(255),
      fuelType varchar(255),
      PRIMARY KEY (id)
    )`);

    await db.exec(`CREATE TABLE IF NOT EXISTS Garages (
      id int,
      name varchar(255),
      PRIMARY KEY (id)
    )`);

    await db.exec(`CREATE TABLE IF NOT EXISTS Prices (
      id int,
      make varchar(255),
      model varchar(255),
      fuelType varchar(255),
      garageId int,
      price Decimal(18,2),
      PRIMARY KEY (id),
      FOREIGN KEY (id) REFERENCES Garages(id)
    )`);

    let cars = await db.all("SELECT * FROM Cars");
    if(cars.length === 0){

      await db.exec('INSERT INTO Cars VALUES (1,"ab12afk","ford","fiesta","petrol")')
      await db.exec('INSERT INTO Cars VALUES (2,"ft20dfg","kia","sportage","petrol")')
      await db.exec('INSERT INTO Cars VALUES (3,"ds70khd","bmw","3","diesel")')
      await db.exec('INSERT INTO Cars VALUES (4,"FG22AFJ","audi","a3","petrol")')
      await db.exec('INSERT INTO Cars VALUES (5,"LK56FAV","audi","a4","petrol")')
  
      await db.exec('INSERT INTO Garages VALUES (1,"Andy\'s Autos")'),
      await db.exec('INSERT INTO Garages VALUES (2,"Kieran\'s Wheels")')

      await db.exec('INSERT INTO Prices VALUES (1,"ford","fiesta","petrol",1,120)')
      await db.exec('INSERT INTO Prices VALUES (2,"ford","fiesta","diesel",1,130)')
    
    }
    
};
