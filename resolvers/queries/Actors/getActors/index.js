const {
    ApolloError
} = require('apollo-server-express')
const getActors = async (_, {
    input
}, {
    models
}) => {
    try {
        return await models.Actor.find();
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = getActors