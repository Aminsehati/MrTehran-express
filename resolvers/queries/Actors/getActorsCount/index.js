const {
    ApolloError
} = require('apollo-server-express')
const getActorsCount = async (_, {}, {
    models
}) => {
    try {
        return await models.Actor.find().count();
    } catch (error) {
        throw new ApolloError(error)
    }
}

module.exports = getActorsCount