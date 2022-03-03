const {ApolloError} = require('apollo-server-express')
const likeTrack = async (_, {
    input
}, {
    models
}) => {
    try {
        const {
            trackID
        } = input
        await models.track.findOneAndUpdate({
            _id: trackID
        }, {
            $inc: {
                like: 1
            }
        })
        return await models.track.findOne({
            _id: trackID
        })
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = likeTrack