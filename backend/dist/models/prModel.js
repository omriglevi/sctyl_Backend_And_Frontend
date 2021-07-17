"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const scytaleDB_schema_1 = require("../db_schemas/scytaleDB_schema");
/* Were using the scema we defined for our prs obj */
const prModel = mongoose_1.default.model('prsModel', scytaleDB_schema_1.scytaleAppDBSchema);
