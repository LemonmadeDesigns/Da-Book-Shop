import { Sequelize } from "sequelize";
 
const db = new Sequelize("mern_db", "root", "", {
  host: "localhost",
  username: "root",
  dialect: "mysql",
  password: "",
});
 
export default db;