import { json } from "body-parser";
import { Request, Response } from "express";
import { prModel } from "../models/prModel";
import { IPr } from "../typeStructures/IPr";


/* Functions for Controlling prs Route  */
export const prsRouteCRUDHandler = {
  getHandler: async (req: Request, res: Response) => {
    try {
      const filter = {};
      const all: IPr[] = await prModel.find(filter);
      console.log(all);
      res.status(200).json({ items: all });
    } catch (error) {
      console.log(error);
      res.status(400).json({ err: error });
    }
  },

  postHandler: (req: Request, res: Response) => {
 const body =req.body as Pick<IPr , "author" | "description" | "lables" | "pr_number" | "status"|"title"|"creationDate">
     let pr: IPr ={
         author:body.author,
         description:body.description,
         lables:body.lables,
         pr_number:body.pr_number,
         status:body.status,
         title:body.title,
         creationDate:Date.now().toString()
         
     }


    prModel.create(pr, (err,doc) => {
        if(err){
        console.log(err);
        res.status(400).json({"err":err});
        } 
     console.log(doc)
     res.status(200).json("Success! Doc ==> "+doc);
    });

    
  },
};
