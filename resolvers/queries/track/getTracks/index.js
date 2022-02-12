const {
    ApolloError
} = require('apollo-server-express')
const getTracks = async (_, {
    input
}, {
    models
}) => {
    try {
        let actorID = input ?.actorID
        return await models.track.find(actorID && {
            actorID
        });
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = getTracks