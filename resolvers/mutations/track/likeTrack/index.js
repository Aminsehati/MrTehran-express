const {
    ApolloError
} = require("apollo-server-express")

const likeTrack = async (_, {
    input
}, {
    models
}) => {
    try {
        const {
            trackID
        } = input
        const track = await models.track.findOne({
            _id: trackID
        });
        return await models.track.findOneAndUpdate({
            _id: trackID
        }, {
            like:track.like + 1
        })
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = likeTrack