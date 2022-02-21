const {
    ApolloError
} = require('apollo-server-express')
const getTracks = async (_, {
    input,
    sort
}, {
    models
}) => {
    try {
        let actorID = input ?.actorID;
        const sortItems = {
            like: sort ?.like,
            updatedAt:sort?.updatedAt,
            createdAt:sort?.createdAt,
            view:sort?.view,
        }
        const trackItem = await models.track.find(actorID && {
            actors: {
                $elemMatch: {
                    _id: actorID
                }
            }
        }).sort(sortItems)
        return trackItem
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = getTracks