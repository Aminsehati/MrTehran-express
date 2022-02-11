const Actors = require('./Actors');
const playList = require('./playList')
module.exports = {
    ...Actors,
    ...playList
}