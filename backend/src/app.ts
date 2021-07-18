import { json,urlencoded } from 'body-parser';
import mongoose from 'mongoose'
import express , {Request,Response,NextFunction} from 'express'
import prsRoutes from './routes/prs'
import cors from 'cors'


const MONGODB_URI='mongodb+srv://Omri:Omri123@clusterforscytale.s7a3b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
/* Configuring Cors */
const allowedOrigins = ['http://localhost:3000','*'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
  };
  /*  ==  */
const app=express();
app.use(cors(options));
app.use(json())
app.use(urlencoded({extended:true}))

/* Connecting to DB and listening to errors and connetions.
we could use a different approach by using if(err) in our connect statment , but our current
configuration allows us to catch disconnecting errors in a better way
*/
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
/* ==========*/




app.use('/prs',prsRoutes) ;
app.use((err:Error , req:Request , res:Response , next:NextFunction)=>{
res.status(500).json({msg:err.message})
})
app.listen(3001,()=>{console.log('listening on 3001')});