const {
    ApolloError
} = require('apollo-server-express')
const deleteTrack = async (_, {
    id
}, {
    models
}) => {
    try {
        return await models.track.findOneAndRemove({
            _id: id
        })
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = deleteTrack