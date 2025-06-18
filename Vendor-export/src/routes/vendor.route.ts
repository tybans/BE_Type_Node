import { Router, Request, Response } from "express";
import { exportVendorsToCSV } from "../controllers/vendor.controller";

const router = Router();

router.get("/export", (req: Request, res: Response) => {
  exportVendorsToCSV(req, res);
});

export default router;