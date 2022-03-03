const {
    ApolloError
} = require('apollo-server-express')
const viewTrack = async (_, {
    input
}, {
    models
}) => {
    try {
        const {
            trackID
        } = input;
        await models.track.findOneAndUpdate({
            _id: trackID
        }, {
            $inc: {
                view: 1
            }
        })
        return await models.track.findOne({
            _id: trackID
        })
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = viewTrack