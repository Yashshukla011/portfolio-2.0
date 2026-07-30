import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB Connected: ${db.connection.host}`);

    } catch (error) {
        console.log("MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};

export default ConnectDB;