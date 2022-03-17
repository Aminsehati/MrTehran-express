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
        return await models.track.findOneAndUpdate({
            _id: trackID
        }, {
            $inc: {
                view: 1
            }
        }, { new: true })
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = viewTrack