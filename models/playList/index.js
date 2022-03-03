const {
    model,
    Schema
} = require('mongoose')
const playListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    coverImgUrl: {
        type: String,
        required: true
    },
    Followers: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})
const playList = model('playList', playListSchema);
module.exports = {
    playList
}