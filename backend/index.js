const express = require("express");
const dotenv = require("dotenv");
const cors=require('cors');
const connectDB=require('./config/db')
const cookieParser = require('cookie-parser');
//routes
const authRoute=require('./routes/authRoutes');


dotenv.config();
connectDB();
const app = express();
const port = process.env.PORT || 5000;


//middlewares 
app.use(express.json());
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use(cookieParser());

//routes
app.use('/auth',authRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
