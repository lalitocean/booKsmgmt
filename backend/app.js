import dotenv from 'dotenv';
dotenv.config();
import connection from './conn/db.js';
import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser';
import userrouter from './routes/user.js';
import bookrouter from './routes/books.js';
import favouriterouter from './routes/favourites.js';
// ^ middlewares ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())
app.use("/api/v1", userrouter)
app.use("/api/v1", bookrouter)
app.use("/api/v1", favouriterouter)


// *connecting the database 
connection();
const port = process.env.PORT || 3000;




app.get("/api/v1/", (req, res) => {
    res.send('Hello World!');
});





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
