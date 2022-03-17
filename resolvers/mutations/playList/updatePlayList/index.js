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
        return await models.playList.findOneAndUpdate({
            _id: id
        }, input, { new: true });
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = updatePlayList