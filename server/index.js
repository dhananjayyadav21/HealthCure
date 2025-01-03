const express = require('express');
const app = express();
const conectToMongo = require('./Config/db');
conectToMongo();
const cors = require('cors')
require('./Scheduler');

const port = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/authentication', require('./routes/user.routes'));
app.use('/api/appointment', require('./routes/appointment.routes'));

app.listen(port,()=>{
   console.log(`app listen at http://localhost:${port} `);
})