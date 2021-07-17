"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prsRouteCRUDHandler = void 0;
const prModel_1 = require("../models/prModel");
/* Functions for Controlling prs Route  */
exports.prsRouteCRUDHandler = {
    getHandler: async (req, res) => {
        try {
            const filter = {};
            const all = await prModel_1.prModel.find(filter);
            console.log(all);
            res.status(200).json({ items: all });
        }
        catch (error) {
            console.log(error);
            res.status(400).json({ err: error });
        }
    },
    postHandler: (req, res) => {
        const body = req.body;
        let pr = {
            author: body.author,
            description: body.description,
            lables: body.lables,
            pr_number: body.pr_number,
            status: body.status,
            title: body.title
        };
        prModel_1.prModel.create(pr, (err, doc) => {
            if (err) {
                console.log(err);
                res.status(400).json({ "err": err });
            }
            console.log(doc);
            res.status(200).json("Success! Doc ==> " + doc);
        });
    },
};
