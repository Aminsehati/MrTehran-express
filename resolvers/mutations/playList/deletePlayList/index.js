const {
    ApolloError
} = require('apollo-server-express')
const deletePlayList = async (_, {
    id
}, {
    models
}) => {
    try {
        return await models.playList.findOneAndDelete({
            _id: id
        })
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = deletePlayList