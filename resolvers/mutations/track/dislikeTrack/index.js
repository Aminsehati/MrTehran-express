const {
    ApolloError
} = require("apollo-server-express")

const dislikeTrack = async (_, {
    input
}, {
    models
}) => {
    try {
        const {
            trackID
        } = input;
        const track = await models.track.findOne({
            _id: trackID
        });
        const like = track.like === 0 ? 0 : track.like - 1;
        return await models.track.findOneAndUpdate({
            _id: trackID
        }, {
            like
        })
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = dislikeTrack