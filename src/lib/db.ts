import mongoose from "mongoose";

export async function dbConnect() {
    try{
        // Get MongoDB URI
        const MONGODB_URI = process.env.MONGODB_URI;
        if (!MONGODB_URI) {
            throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
        };

        const connect = await mongoose.connect(MONGODB_URI);
        console.log(`Connected to MongoDB: ${connect.connection.host}`);
    }catch(error){
        throw new Error(`Failed to connect to database: ${error}`);
    };
};