const express=require('express');
const bodyParser=require('body-parser');
const routerV1= require('./routes/routes');
const PORT=4000;
const app=express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/api/teacher-service/v1', routerV1);



app.listen(PORT, ()=>{
    console.log(`App Listening at PORT ${PORT}`);
})

