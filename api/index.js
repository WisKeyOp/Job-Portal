import serverless from "serverless-http";
import app from "../backend/app.js";
import cloudinary from "cloudinary";

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
  api_key: process.env.CLOUDINARY_CLIENT_API,
  api_secret: process.env.CLOUDINARY_CLIENT_SECRET
});

const handler = serverless(app);

export default async function (req, res) {
  return handler(req, res);
}
