import mongoose, { mongo } from "mongoose";

const connectDb = async ()=>{
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Database connected")

  } catch (error) {
    console.log(`databsesError ${error}`)
  }
}

export default connectDb