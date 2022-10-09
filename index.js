import "dotenv/config";
import "./database/connectdb.js";
import express from "express";
import routerAuth from "./routes/auth.route.js";
const app = express();


app.use(express.json());
app.use("/api/v1", routerAuth);

const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`https://localhost/${PORT}`));
