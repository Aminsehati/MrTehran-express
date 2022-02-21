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
        const like = track.like + 1;
        await models.track.findOneAndUpdate({
            _id: trackID
        }, {
            like
        });
        return await models.track.findOne({
            _id: trackID
        });
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = likeTrack