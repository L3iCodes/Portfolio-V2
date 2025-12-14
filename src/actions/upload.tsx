'use server';

import cloudinary from "../lib/cloudinary";

export const uploadToCloudinary = async (image: any) => {
    try{
        return await cloudinary.uploader.upload(image, {
            folder: 'Projects',
            use_filename: true,
        })

    }catch(error){
        console.log(error);
        
    }
};