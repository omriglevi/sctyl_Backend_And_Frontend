import { Request , Response} from 'express'





/* Functions for Controlling prs Route  */
export const prsRouteCRUDHandler  ={

    getHandler:   (req:Request,res:Response)=>{
        res.status(200).json({msg:"ok ok ok Get Is fine "})
    },
    postHandler:   (req:Request,res:Response)=>{
        res.status(200).json({msg:"ok ok ok Post Is fine "})

    }
}