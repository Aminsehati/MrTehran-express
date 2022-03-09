const {
    ApolloError
} = require('apollo-server-express')
const getPlayLists = async (_, {
    pagination
}, {
    models
}) => {
    try {
        const paginationItem = {
            limit: pagination?.limit || 20,
            skip: pagination?.skip || 1
        }
        return await models.playList.find().limit(paginationItem.limit).skip(paginationItem.limit * (paginationItem.skip - 1));
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = getPlayLists