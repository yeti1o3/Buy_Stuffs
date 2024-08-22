import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY||855518848585681, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

export const uploadToCloudinary = async (req, res, next) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }

    const uploadPromises = [];

    // Upload images
    if (req.files.images) {
      req.files.images.forEach((file) => {
        const uploadPath = path.resolve(file.path);
        uploadPromises.push(
          cloudinary.uploader.upload(uploadPath, { folder: 'ecommerce' })
            .then((result) => {
              // Add the URL to req.body.images
              if (!req.body.images) req.body.images = [];
              req.body.images.push(result.secure_url);
              
              // Remove the local file after uploading
              fs.unlinkSync(uploadPath);
            })
        );
      });
    }

    // Upload thumbnail
    if (req.files.thumbnail && req.files.thumbnail.length > 0) {
      const thumbnailPath = path.resolve(req.files.thumbnail[0].path);
      uploadPromises.push(
        cloudinary.uploader.upload(thumbnailPath, { folder: 'ecommerce' })
          .then((result) => {
            // Add the URL to req.body.thumbnail
            req.body.thumbnail = result.secure_url;
            
            // Remove the local file after uploading
            fs.unlinkSync(thumbnailPath);
          })
      );
    }

    await Promise.all(uploadPromises);
    next();
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    res.status(500).send('Failed to upload images.');
  }
};
