import dotenv from 'dotenv'
dotenv.config();
import https from "https";
import  app  from "./app.js";

const port = process.env.PORT || 3000


const server = https.createServer(app);

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})