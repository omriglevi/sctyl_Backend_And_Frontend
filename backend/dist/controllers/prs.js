"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prsRouteCRUDHandler = void 0;
/* Functions for Controlling prs Route  */
exports.prsRouteCRUDHandler = {
    getHandler: (req, res) => {
        res.status(200).json({ msg: "ok ok ok Get Is fine " });
    },
    postHandler: (req, res) => {
        res.status(200).json({
            "syud": req.body
        });
    }
};
