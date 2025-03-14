import {v2 as cloudinary} from "cloudinary";
import fs from "fs";






cloudinary.config({ 
    cloud_name:  process.env.CLOUDINARY_CLOUD_NAME ,
    api_key:   process.env.CLOUDINARY_CLOUD_KEY ,
    api_secret:  process.env.CLOUDINARY_CLOUD_SECRET ,
});




const uploadoncloudinary = async (localfilepath) => {
    try {
        if (!localfilepath) return null
        //upload the file on cloudinary
          const response = await cloudinary.uploader.upload(localfilepath , {
            resource_type: "auto"
        })
        //file has been uploaded succesfully
        console.log("file is uploaded on cloudinary" ,  response.url);
        return response;
            
        
    } catch (error) {
        fs.unlinkSync(localfilepath)//remove the localy saved temporarilyfile as the upload operation got failed
         return null;

    }
}

export {uploadoncloudinary};




const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
