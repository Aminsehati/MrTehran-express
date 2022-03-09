const {
    ApolloError
} = require("apollo-server-express")

const updatePlayList = async (_, {
    id,
    input
}, {
    models
}) => {
    try {
        await models.playList.findOneAndUpdate({
            _id: id
        }, input);
        return await models.playList.findOne({
            _id: id
        })
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = updatePlayList