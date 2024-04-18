import mongoose from 'mongoose';

// MongoDB connection URL
const url = 'mongodb+srv://ayush:19122001an@cluster0.xm7fm.mongodb.net/Mern'
 const connect = mongoose.connect('url');
if (connect){
    console.log("connected")
}
else{
    console.log("not connected")
}
export default connect;
