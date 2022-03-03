const {
    ApolloError
} = require('apollo-server-express')
const getTracksCount = async (_, {}, {
    models
}) => {
    try {
        return await models.track.find().count();
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = getTracksCount