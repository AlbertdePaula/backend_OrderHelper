import { Engine } from "../engines/infra/typeorm/entities/Engines";
import { Request, Response } from "express-serve-static-core"

export const createEngine = async (req: Request, res: Response) => {
    try {
        const { tag, description, current, power, rpm, area, createdFor } = req.body;

        const engine = new Engine;
        engine.tag = tag;
        engine.description = description;
        engine.current = current;
        engine.power = power;
        engine.rpm = rpm;
        engine.area = area;
        engine.createdFor = createdFor;

        await engine.save();

        return res.json(engine);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({message: error.message});
        }        
    }
};