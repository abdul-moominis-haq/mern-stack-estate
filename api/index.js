import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from '/routes/user.js';
dotenv.config();


mongoose.connect(process.env.MONGO).then( () =>{
    console.log("Conneted to MongoDB successfully");
})
.catch( (err) =>{
    console.log(err);
})



const app = express();

app.listen(3000, () =>{
    console.log('Server is running on port 3000 good');
}
);
app.get('/test', (req, res) =>{
    res.json({
        message:'Hello World'
    })
} ) 