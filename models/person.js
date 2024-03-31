const mongoose=require("mongoose");
const personschema=new mongoose.Schema({
    name:{
        type:"string",
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:"string",
        enum: ['chef', 'owner','waiter'],
        required:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:"string",
        required:true,
        unique:true
    },
    address:{
        type:"string",
        required:true
    },
    salary:{
        type:Number
    }
});

const Person = mongoose.model('Person', personschema);
module.exports=Person;