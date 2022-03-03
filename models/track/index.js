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
    view: {
        type: Number,
        default: 0
    },
    like: {
        type: Number,
        default: 0
    },
    actors: [{
        _id: {
            type: Schema.Types.ObjectId,
            ref: "Actor"
        },
        name: {
            type: String
        },
        imgUrl: {
            type: String,
        },
        coverImgUrl: {
            type: String,
        },
        Followers: {
            type: Number,
        }
    }]
}, {
    timestamps: true
})
const track = model('track', trackSchema);
module.exports = {
    track
}