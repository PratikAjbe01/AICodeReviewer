const express=require('express');
const { handlePrompt } = require('./controller/aiassitance');
const app=express();
const cors=require('cors');
require('dotenv').config();
app.use(express.json());
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5173/'],
    credentials: true,
    methods: ['POST'],
  };
  app.use(cors()); // Allows ALL domains (remove later!)
const PORT=process.env.PORT||6000;
app.get('/',(req,res)=>{
    res.send('thats working brother');
});
app.post('/review',handlePrompt);
app.listen(PORT,()=>{
    console.log(`server running on PORT:${PORT}`);
    
})