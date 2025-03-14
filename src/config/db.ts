import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log(" Mongodb baglantisi basarili");
    } catch (err) {
        console.log("mongodb baglantisi basarisiz", err);
        process.exit(1);
    }
};
export default connectDB;