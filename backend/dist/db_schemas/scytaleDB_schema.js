"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scytaleAppDBSchema = void 0;
const mongoose_1 = require("mongoose");
exports.scytaleAppDBSchema = new mongoose_1.Schema({
    "status": { type: String, required: true },
    "pr_number": { type: Number, required: true },
    "title": { type: String, required: true },
    "description": { type: String, required: true },
    "author": { type: String, required: true },
    "lables": { type: [String], required: true },
    "creationDate": { type: String, required: true }
});
