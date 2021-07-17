"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prs_1 = require("../controllers/prs");
const router = express_1.Router();
/* Defining our routes for this tiny app */
router.post('/', prs_1.prsRouteCRUDHandler.postHandler);
router.get('/', prs_1.prsRouteCRUDHandler.getHandler);
exports.default = router;
