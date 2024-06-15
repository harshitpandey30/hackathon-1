import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectioninstance = await mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DBNAME}`);
        console.log(`MongoDB Connected: ${connectioninstance.connection.host}`);
    } catch (error) {
        console.error(error);
    }
};

export default connectDB;