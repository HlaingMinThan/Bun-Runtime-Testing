import express from 'express'
import { env } from 'process';
const isEven = require('is-even');

const app = express();

app.get('/',function(req,res) {
    res.json({isEven : isEven(11)})
})

app.get('/test',function(req,res) {
    res.json({hello : env.HELLO})
})

app.listen(3000,function(){
    console.log('app is running')
})