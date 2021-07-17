import {Schema } from 'mongoose' ;
import { IPr } from '../typeStructures/IPr';


export const scytaleAppDBSchema = new Schema<IPr>({
    "status": {type:String , required:true},
    "pr_number": {type:String , required:true},
    "title": {type:String , required:true},
    "description": {type:String , required:true},
    "author": {type:String , required:true},
    "lables": {type:[String] , required:true},

})