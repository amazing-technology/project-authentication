/**
 * @AuthenticationCenter API 
 * @author Faustin IYAREMYE
 * API Server Entry File
 * All rights @Amazing Technology
 */
 import 'dotenv/config';
 import http from 'http';
 import app from './app/app';
 import {sequelize}  from './database/models';
 
 const server= http.createServer(app);
 const serverPort = Number(process.env.PORT) || 3000;
 
 const connectServer=()=>{
   server.listen(serverPort,async()=>{
     console.log(`\nServer Started & Listening on PORT: ${serverPort}\n`);
     await sequelize
      .authenticate()
      .then(() => {
        console.log('\nDatabase Connected! \n');
      })
      .catch((err:any) => {
        console.log('\n!!!Database Not Connected !!! \n');
        console.log({ Error_Message: err });
      });
   });
 }
 
 connectServer();