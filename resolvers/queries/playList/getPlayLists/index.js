const {
    ApolloError
} = require('apollo-server-express')
const getPlayLists = async (_, {}, {
    models
}) => {
    try {
        console.log(models.playList);
        return await models.playList.find();
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = getPlayLists