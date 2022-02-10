const {
    model , 
    Schema
} = require('mongoose')

const ActorSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    imgUrl:{
        type:String,
        required:true,
    },
    coverImgUrl:{
        type:String,
        required:true,
    },
    Followers:{
        type:Number,
        default:0
    }
},
{
    timeseries:true,
});

const Actor = model("Actor",ActorSchema)
module.exports = {
    Actor
}