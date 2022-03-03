const Upload = require('./Upload');
const Actors = require('./Actors');
const playList = require('./playList');
const track = require('./track');
module.exports = {
    ...Upload,
    ...Actors,
    ...playList,
    ...track
}