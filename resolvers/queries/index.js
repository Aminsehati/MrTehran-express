const Actors = require('./Actors');
const playList = require('./playList');
const track = require('./track')
module.exports = {
    ...Actors,
    ...playList,
    ...track
}