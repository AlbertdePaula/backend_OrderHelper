"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class CreateAreas1666483912019 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "engines",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: "tag",
                    type: "varchar",
                    isUnique: true,
                    isNullable: false
                },
                {
                    name: "description",
                    type: "varchar",
                },
                {
                    name: "current",
                    type: "varchar",
                },
                {
                    name: "power",
                    type: "varchar",
                },
                {
                    name: "rpm",
                    type: "varchar",
                },
                {
                    name: "area",
                    type: "varchar"
                },
                {
                    name: "createdFor",
                    type: "number"
                },
                {
                    name: "creted_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("engines");
    }
}
exports.CreateAreas1666483912019 = CreateAreas1666483912019;
