const {
    ApolloError
} = require("apollo-server-express")

const updateActors = async (_, {
    id,
    input
}, {
    models
}) => {
    try {
        return await models.Actor.findOneAndUpdate({
            _id: id
        }, input, { new: true });
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = updateActors