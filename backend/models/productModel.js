import { Sequelize } from "sequelize";
import db from "../config/db.js";
 
const { DataTypes } = Sequelize;
 
const Product = db.define('products',{
    title: {
        type: DataTypes.STRING
    },

    desc: {
        type: DataTypes.STRING
    },

    price: {
        type: DataTypes.DOUBLE
    },

    cover: {
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Product;