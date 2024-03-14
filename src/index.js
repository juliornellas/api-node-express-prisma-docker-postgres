import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "../src/routes/index";

//To access .env file
dotenv.config();

//Initialize the Express
const app = express();

//Inject cors to allow any sort of access
app.use(cors());

//Define JSON as the format to share data to the API
app.use(express.json());

//Access the route file and pass the app instance
router(app);

//Run the service
app.listen(3001);
console.log("The server is up and running...");
