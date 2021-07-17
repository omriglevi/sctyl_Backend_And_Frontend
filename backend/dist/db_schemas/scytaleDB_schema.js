"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const scytaleAppDBSchema = new mongoose_1.Schema({
    pr_number: String,
    title: String,
    description: String,
    author: String,
    status: String,
    labels: [String],
    creationDate: Date.now()
});
