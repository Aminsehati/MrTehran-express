const {
    ApolloError
} = require("apollo-server-express")
const getPlayListsCount = async (_, {
    id
}, {
    models
}) => {
    try {
        return await models.playList.find().count();
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = getPlayListsCount