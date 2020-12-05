const Router = require('express');

const routerV1=Router();
routerV1.post('/user-signup', ()=>{
    console.log("User Sign up");
});

module.exports=routerV1;