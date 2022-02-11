const {
    ApolloError
} = require('apollo-server-express')
const createPlayList = async (_, {
    input
}, {
    models
}) => {
    try {
        return await models.playList.create(input);
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = createPlayList