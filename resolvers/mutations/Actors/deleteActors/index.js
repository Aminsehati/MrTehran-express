const {
    ApolloError
} = require('apollo-server-express')
const deleteActors = async (_, {
    id
}, {
    models
}) => {
    try {
        return await models.Actor.findOneAndRemove({
            _id: id
        })
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = deleteActors