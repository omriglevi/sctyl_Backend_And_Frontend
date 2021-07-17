import { json } from 'body-parser';
import mongoose from 'mongoose'
import express , {Request,Response,NextFunction} from 'express'
import prsRoutes from './routes/prs'


const MONGODB_URI='mongodb+srv://Omri:Omri123@clusterforscytale.s7a3b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app=express();

/* START  Setting up connection to our cloud DB */
mongoose.connect(MONGODB_URI,{
    useNewUrlParser:true , 
    useUnifiedTopology:true
});
mongoose.connection.on('connected', ()=>{
    console.log("Were Connected to Scytale Cloud mongoDB AKA Atlas , For Demo purposes only !")
});
mongoose.connection.on('error', (err:Error)=>{
    console.log("This error occured while trying to connect to atlas=="+err.message+'\n')
});
/* END of Setting up connection to our cloud DB */




app.use(json);
app.use('/prs',prsRoutes) ; // Currently we are using only one route wich is /prs


app.use((err:Error , req:Request , res:Response , next:NextFunction)=>{
res.status(500).json({msg:err.message})
})


app.listen(3001,()=>{console.log('listening on 3001')});