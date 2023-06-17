const mongoose = require('mongoose');

url = 'mongodb+srv://ratan:1234@cluster0.b8ycfbh.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("MongoDB Database Connected!")
}).catch((error)=>{
    console.log(error);
})