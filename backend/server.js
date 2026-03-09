const app=require('./src/app');
const port=3000;
const connectDB=require('./src/db/db');
connectDB();
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});                      

