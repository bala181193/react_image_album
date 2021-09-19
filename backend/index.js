const { Router } = require('express');
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const bodyParser=require('body-parser');
const router=require('./router');
const cors=require('cors');
const morgan=require('morgan')
mongoose.connect("mongodb://localhost:27017/mydbs",{useNewUrlParser:true},{useUnifiedTopology:true},()=>{
    console.log("db connected")
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(cors());
app.use(morgan('dev'))
app.use(express.static('./public/'));
app.set('view engine','ejs');
app.use('/',router)
app.listen('1000',(req,res)=>{
console.log('server is running 1000')
})
