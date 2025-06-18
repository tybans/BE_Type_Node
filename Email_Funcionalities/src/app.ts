import  express  from "express";
import emailRoutes from "./routes/email.routes"
import dotenv from "dotenv"


dotenv.config()

const app = express()
 
app.use(express.json())
app.use("/api", emailRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
  
})

// Run the App
// npx ts-node-dev src/app.ts
