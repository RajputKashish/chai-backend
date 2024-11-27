import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
const app =express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit: "16kb"}))  //to take data in json form 
app.use(express.urlencoded({extended:true,limit:"16kb"}))  //url me encoder hoti hain values in default jaise +,* lag jate hain url ke beech me toh us data ho handle krne klie
app.use(express.static("public"))   //to store pdf files ,images orfavicons
app.use(cookieParser())             //isse aaap user ki cokkiee use kr skte ho by server 


export {app}