"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_controller_1 = require("./../../../modules/controllers/engine.controller");
const express_1 = require("express");
const router = express_1.Router();
router.post("/engines", engine_controller_1.createEngine);
exports.default = router;
