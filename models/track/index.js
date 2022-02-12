const {
    model,
    Schema
} = require('mongoose')

const trackSchema = new Schema({
    imgUrl: {
        type: String,
        required: true
    },
    audioUrl: {
        type: String,
        required: true,
    },
    trackName: {
        type: String,
        required: true
    },
    actorID: {
        type: Schema.Types.ObjectId,
        ref: "Actor"
    },
    actorName:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
const track = model('track', trackSchema);
module.exports = {
    track
}