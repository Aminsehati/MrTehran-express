const {ApolloError} = require('apollo-server-express')
const getPlayLists = async (_, {}, {
    models
}) => {
    try {
        return await models.playList.find();
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = getPlayLists