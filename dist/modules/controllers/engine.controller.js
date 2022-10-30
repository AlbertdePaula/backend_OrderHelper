"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Engines_1 = require("../engines/infra/typeorm/entities/Engines");
exports.createEngine = async (req, res) => {
    try {
        const { tag, description, current, power, rpm, area, createdFor } = req.body;
        const engine = new Engines_1.Engine;
        engine.tag = tag;
        engine.description = description;
        engine.current = current;
        engine.power = power;
        engine.rpm = rpm;
        engine.area = area;
        engine.createdFor = createdFor;
        await engine.save();
        return res.json(engine);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
};
