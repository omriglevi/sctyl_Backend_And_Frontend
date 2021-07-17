import {Schema } from 'mongoose' ;


export const scytaleAppDBSchema= new Schema<Pr_structure>({
    "status": {type:String , required:true},
    "pr_number": {type:String , required:true},
    "title": {type:String , required:true},
    "description": {type:String , required:true},
    "author": {type:String , required:true},
    "pr_status": {type:String , required:true},
    "lables": {type:[String] , required:true},

})