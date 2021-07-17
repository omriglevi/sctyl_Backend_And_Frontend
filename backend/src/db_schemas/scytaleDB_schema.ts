import {Schema } from 'mongoose' ;


const scytaleAppDBSchema= new Schema({

pr_number : String! , 
title: String! ,
description : String! ,
author:String!,
status:String!,
labels:[String!],
creationDate:Date.now()
})