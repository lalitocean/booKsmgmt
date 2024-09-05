import mongoose from "mongoose";

const connection = async (dburi) => {
    try {
        await mongoose.connect(dburi)
        console.log("CONNECTED")
    } catch (error) {
        console.log("error in the database connection")
    }
}
export default connection