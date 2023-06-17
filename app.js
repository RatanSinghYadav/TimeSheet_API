const express = require('express');
const app = express();
require('./db/connect.js')
const route = require('./routes/router.js');


app.use(express.json());
app.use(route);

// app.get('/',(req,res)=>{
//     res.send("Hello express")
// })

app.listen(8000,()=>{
    console.log("server is running...")
})