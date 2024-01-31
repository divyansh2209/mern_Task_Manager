const express = require('express');
const server = express();
const mongoose = require('mongoose');
const cors = require('cors')
const authRouter = require('./routes/Auth');
const taskRouter = require('./routes/Tasks');
require('dotenv').config();
const path = require('path')

server.use(express.static(path.resolve(__dirname , 'build')))
server.use(cors({
    exposedHeaders:['X-Total-Count']
}))
server.use(express.json()); 
server.use('/auth', authRouter.router)
server.use('/task', taskRouter.router)

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('database connected');
}

main().catch((err) => console.log(err));

server.get('/',(req, res)=>{
    res.json({status:'success'})
})

server.listen(8080, () => {
    console.log('server started');
});