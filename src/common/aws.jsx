import axios from "axios";
import "../index.css";
export const uploadImage = async (img) => {
    console.log("Starting image upload.");
    let imgUrl = null;
    const serverUrl = "https://animimic-server-3.onrender.com";
    
    try {
        const { data: { uploadURL, public_id, upload_preset, timestamp, signature, api_key } } = await axios.get(serverUrl + "/get-upload-url");

        // Create a FormData object to include the image and parameters
        const formData = new FormData();
        formData.append("file", img);
        formData.append("upload_preset", upload_preset);
        formData.append("public_id", public_id);
        formData.append("timestamp", timestamp);
        formData.append("signature", signature);
        formData.append("api_key", api_key);

        // Perform the upload to Cloudinary
        const response = await axios.post(uploadURL, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });

        imgUrl = response.data.secure_url;  // Cloudinary's URL for the uploaded image
        console.log("Image uploaded successfully:", imgUrl);
    } catch (err) {
        console.error("Error uploading image:", err);
    }
    return imgUrl
};