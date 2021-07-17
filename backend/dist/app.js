"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const prs_1 = __importDefault(require("./routes/prs"));
const MONGODB_URI = 'mongodb+srv://Omri:Omri123@clusterforscytale.s7a3b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const app = express_1.default();
/* START  Setting up connection to our cloud DB */
mongoose_1.default.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose_1.default.connection.on('connected', () => {
    console.log("Were Connected to Scytale Cloud mongoDB AKA Atlas , For Demo purposes only !");
});
mongoose_1.default.connection.on('error', (err) => {
    console.log("This error occured while trying to connect to atlas==" + err.message + '\n');
});
/* END of Setting up connection to our cloud DB */
app.use(body_parser_1.json);
app.use('/prs', prs_1.default); // Currently we are using only one route wich is /prs
app.use((err, req, res, next) => {
    res.status(500).json({ msg: err.message });
});
app.listen(3001, () => { console.log('listening on 3001'); });
