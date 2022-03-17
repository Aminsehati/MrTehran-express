const { ApolloError } = require('apollo-server-express')
const likeTrack = async (_, {
    input
}, {
    models
}) => {
    try {
        const {
            trackID
        } = input
        return await models.track.findOneAndUpdate({
            _id: trackID
        }, {
            $inc: {
                like: 1
            }
        }, { new: true })
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = likeTrack