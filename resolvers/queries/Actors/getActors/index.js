const {
    ApolloError
} = require('apollo-server-express')
const getActors = async (_, {
    pagination
}, {
    models
}) => {
    try {
        const paginationItem = {
            limit: pagination ?.limit || 10,
            skip: pagination ?.skip || 1
        }
        return await models.Actor.find().limit(paginationItem.limit).skip(paginationItem.limit * (paginationItem.skip - 1))
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = getActors