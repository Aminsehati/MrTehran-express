const {
    ApolloError
} = require('apollo-server-express')
const getTrack = async (_, {
    id
}, {
    models
}) => {
    try {
        return await models.track.findOne({
            _id: id
        });
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = getTrack