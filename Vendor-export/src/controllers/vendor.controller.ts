import { Request, Response } from "express";
import Vendor from "../models/vendor.model";
import { generateCSV } from "../utils/csvGenerator";

export const exportVendorsToCSV = async (req: Request, res: Response) => {
  try {
    const vendors = await Vendor.findAll({ attributes: ["id", "name", "email", "contactNumber"],
      raw: true
     });

    if (!vendors || vendors.length === 0) {
      return res.status(404).json({ message: "No vendor data found" });
    }

    const csv = generateCSV(vendors);

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=vendors.csv");
    res.status(200).send(csv);
  } catch (err) {
    res.status(500).json({ message: "Error exporting data", error: err });
  }
};
