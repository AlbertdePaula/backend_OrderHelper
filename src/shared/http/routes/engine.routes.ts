import { createEngine } from './../../../modules/controllers/engine.controller';
import { Router } from "express";

const router = Router();

router.post("/engines", createEngine);

export default router;