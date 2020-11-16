//reference folder
import * as mysql from "mysql";
import db from "./chirps"
import users from "./users";

export const Connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "chirper",
  password: "king64",
  database: "chirper",
});

export const Query = (query: string, values?: Array<string | number>) => {
  return new Promise<Array<any>>((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

export default {
  Query,
  users
};