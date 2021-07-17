import mongoose from 'mongoose'
import {scytaleAppDBSchema} from '../db_schemas/scytaleDB_schema'
import { IPr } from '../typeStructures/IPr';




/* Were using the scema we defined for our prs obj */
export   const prModel = mongoose.model<IPr>('prsModel',scytaleAppDBSchema);