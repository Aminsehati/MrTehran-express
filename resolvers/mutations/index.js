const Upload = require('./Upload')
const Actors = require('./Actors');
const playList = require('./playList')
module.exports = {
    ...Upload,
    ...Actors,
    ...playList
}