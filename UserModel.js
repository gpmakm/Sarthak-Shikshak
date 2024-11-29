const express = require('express');
const mongoose=require('mongoose')

const userSchemaMain= mongoose.Schema({
    uname:String,
    email:String,
    passw:String,
    cpassw:String
})
module.exports=mongoose.model('Person',userSchemaMain)