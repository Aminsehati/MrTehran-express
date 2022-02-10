const {
    ApolloError
} = require('apollo-server-express')
const getActor = async (_, {
    id
}, {
    models
}) => {
    try {
        return await models.Actor.findOne({
            _id: id
        })
    } catch (error) {
        throw new ApolloError(error)
    }
}

module.exports = getActor