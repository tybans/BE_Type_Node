import express from 'express';
import userRoutes from './routes/user.routes'; 
import dotenv from 'dotenv'; 
dotenv.config(); 




const app = express();
app.use(express.json()); // Middleware to parse JSON bodies


app.use("/api/users", userRoutes); // 

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})

