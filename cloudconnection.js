// const cloudinary = require("cloudinary").v2;
// require("dotenv").config();

// cloudinary.config({

//     cloud_name:process.env.CLOUD_NAME,
//     api_key:process.env.API_KEY,
//     api_secret:process.env.API_SECRET,
// })

// module.exports = cloudinary;



const cloudinary = require("cloudinary");

require("dotenv").config()

cloudinary.config({
    cloud_name:process.env.cloud_name,
    api_key:process.env.api_key,
    api_secret:process.env.api_secret
})

module.exports= cloudinary;