const mongoose = require("mongoose");
// mongoose.connect('mongodb://localhost/redstore');

mongoose.set("useNewUrlParser", true);
// mongoose
//   .connect(
//     "mongodb+srv://bluestar:goldenstar@0220@cluster0.uucjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  
//   )
//   .then(() => {
//     console.log("Connected to Database");
//   })
//   .catch((err) => {
//     console.log("Not Connected to Database ERROR! ");
//     // console.log(err);
//   });
const connectDB = async () => {
  const URI = "mongodb+srv://bluestar:goldenstar0220@cluster0.uucjt.mongodb.net/"
  
  try{
    const response = await mongoose.connect(URI, { useUnifiedTopology: true, dbName: 'bluestar' })
    console.log("Database connected successfully");
  }
  catch(error){
    console.log("Error: ", error)
  }
}
connectDB();
mongoose.Promise = Promise;

mongoose.set("debug", true);

module.exports.Products = require("./product");
module.exports.Users = require("./user");

//mongodb+srv://akash.kumar.2000201@gmail.com:goldenstar0220@cluster0.y8tmv.mongodb.net/
