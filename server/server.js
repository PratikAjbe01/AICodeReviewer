const express=require('express');
const { handlePrompt } = require('./controller/aiassitance');
const app=express();
const cors=require('cors');
require('dotenv').config();
app.use(express.json());
const allowedOrigins = [
    'http://localhost:5173',
    'https://ai-code-reviewer-frontend-drab.vercel.app/' // Your frontend URL
  ];
  app.use(cors({ origin: allowedOrigins }));
const PORT=process.env.PORT||6000;
app.get('/',(req,res)=>{
    res.send('thats working brother');
});
app.post('/review',handlePrompt);
app.listen(PORT,()=>{
    console.log(`server running on PORT:${PORT}`);
    
})