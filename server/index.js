            import express from 'express'
            import mongoose from 'mongoose';
            import cors from 'cors'
            import bodyParser from 'body-parser';
            import userroutes from './routes/userroutes.js'
            import postRoutes from './routes/posts.js';
            // import db from './db.js'
            const app = express();
            
            app.use(cors());
            app.use(express.json({
                limit:"30mb",extended:true
            }))


            app.use("/posts",postRoutes);
            app.use('/user',userroutes);

            const CONNECTION_URL = 'mongodb+srv://ayush:19122001an@cluster0.xm7fm.mongodb.net/mern';
            const PORT = process.env.PORT || 5000;
            mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
            .catch((error) => console.log(`${error} did not connect`));