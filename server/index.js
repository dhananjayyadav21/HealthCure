const express = require('express');
const app = express();
const conectToMongo = require('./Config/db');
conectToMongo();
const cors = require('cors')

const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/authentication', require('./routes/user.routes'));

app.get('/',(req,res)=>{
    res.send('hellow');
    console.log("hellow");
});

app.listen(port,()=>{
   console.log(`app listen at http://localhost:${port} `);
})