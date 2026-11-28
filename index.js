import express from "express"
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 5001;
const app = express()

app.get("/", (req,res)=>{
    return res.status(200)
              . json({message:"hello to ci/cd workflow"})
})

app.get("/health", (req,res)=>{
    return res.status(200)
              . json({message:"all is good at /health"})
})

app.listen(port, ()=>{
    console.log(`server started at ${port}`)
})