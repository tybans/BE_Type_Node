import { DataTypes } from "sequelize";
import {sequelize} from "../config/db";

const Vendor = sequelize.define("Vendor", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  contactNumber: { type: DataTypes.STRING },
}, {
  tableName: "Vendors",
  timestamps: false,
});

export default Vendor;
