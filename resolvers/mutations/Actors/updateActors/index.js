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
        console.log(input);
        console.log(models.Actor);
        await models.Actor.findOneAndUpdate({
            _id: id
        }, input);
        return await models.Actor.findOne({
            _id: id
        })
    } catch (error) {
        console.log(error);
        throw new ApolloError(error)
    }
}
module.exports = updateActors