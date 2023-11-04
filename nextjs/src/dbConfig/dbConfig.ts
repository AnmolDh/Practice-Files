import mongoose from "mongoose";

async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB database connection established successfully");
    });

    connection.on("error", (err) => {
      console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    });
  } catch (error) {
    console.log("something went wrong!");
    console.log(error);
  }
}

export default connect;