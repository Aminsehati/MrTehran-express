const {
    ApolloError
} = require('apollo-server-express')
const FollowActors = async (_, { id }, {
    models
}) => {
    try {
        console.log(id);
        return await models.Actor.findOneAndUpdate({ _id: id }, {
            $inc: {
                Followers: 1
            }
        }, {
            new: true
        })
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = FollowActors