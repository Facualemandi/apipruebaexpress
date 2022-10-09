import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.URL_MONGO);
  console.log("Connect DB ");
} catch (error) {
  console.log("Error a conexion DB");
}
