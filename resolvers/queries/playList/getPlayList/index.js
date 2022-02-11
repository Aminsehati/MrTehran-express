const {
    ApolloError
} = require('apollo-server-express')
const getPlayList = async (_, {
    id
}, {
    models
}) => {
    try {
        return await models.playList.findOne({
            _id: id
        })
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = getPlayList