import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./config/db";
import vendorRoutes from "./routes/vendor.route";
// import { Vendor } from "./models/vendor.model";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/vendor", vendorRoutes);

const PORT = process.env.PORT || 3000;

sequelize.authenticate();
console.log("Database connected successfully");

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
