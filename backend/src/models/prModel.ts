import mongoose from 'mongoose'
import {scytaleAppDBSchema} from '../db_schemas/scytaleDB_schema'




/* Were using the scema we defined for our prs obj */
const prModel = mongoose.model('prsModel',scytaleAppDBSchema);