const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());


// const { initializeApp, cert } = require('firebase-admin/app');
// const { getStorage, getDownloadURL, ref  } = require('firebase-admin/storage');
// const serviceAccount = require('./nany-ffb26-firebase-adminsdk-emky2-7f198e19fc.json');
// var admin = require("firebase-admin");
// initializeApp({
//   credential: cert(serviceAccount),
//   storageBucket: 'gs://nany-ffb26.appspot.com/'
// });

//cors
const cors = require("cors");
app.use(
  cors({
    origin: "*",

    methods: ["GET", "POST"],

    allowedHeaders: ["Content-Type"],
  })
);

const { verifyadmintoken } = require("./src/middleware/auth");

// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization,authorization"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   // res.status(200).json({"message":"App is Running"})
//   next();
// });

//Admin Api's
//routes

const topheader = require("./src/api/Topheader");
const authentication = require("./src/api/Authentication");
const banner = require("./src/api/Banner");
const about = require("./src/api/AboutSection");
const Service = require("./src/api/Service");
const price = require("./src/api/Pricing");
const Works = require("./src/api/Howitworks");
const market = require("./src/api/Market");
const faq = require("./src/api/Faq");
const contact = require("./src/api/Contact");
const category = require("./src/api/Category");
const product = require("./src/api/Product");
const order = require("./src/api/Order");
const Websetting = require("./src/api/Websetting");
const booking = require("./src/api/Booking");
const query = require('./src/api/Queries')
const splashscreen = require('./src/api/SplashScreen');
//set path

app.use("/uploads", express.static("uploads"));
app.use("/topheader", topheader);
app.use("/auth", authentication);
app.use("/banner", banner);
app.use("/about", about);
app.use("/Service", Service);
app.use("/Price", price);
app.use("/Work", Works);
app.use("/market", market);
app.use("/faq", faq);
app.use("/contact", contact);
app.use("/category", category);
app.use("/product", product);
app.use("/order", order);
app.use("/Websetting", Websetting);
app.use("/booking", booking);
app.use('/query', query);
app.use('/splashscreen', splashscreen)

///get image 
// app.get('/:url', async (req, res) => {
//   const fileRef = admin.storage().bucket().file(req.params.url);
//   const hash = await fileRef.download()
//   res.contentType(fileRef.metadata.contentType);
//   res.end(hash[0], 'binary');
// });


app.use("/uploads", express.static("uploads"));
//Data base connection
var url = process.env.MONGO_URL;

mongoose.connect(
  url,
  { useUnifiedTopology: true, useNewUrlParser: true },
  function (err) {
    if (err) {

      console.log(err);
    } else {
      console.log("DataBase connected");
    }
  }
);


//Creating Server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is Running....`);
});
