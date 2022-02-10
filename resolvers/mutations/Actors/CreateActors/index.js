const {
    ApolloError
} = require('apollo-server-express')
const createActors = async (_, {
    input
}, {
    models
}) => {
    try {
        console.log(models.Actor);
        return await models.Actor.create(input)
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = createActors