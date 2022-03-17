const {
    ApolloError
} = require('apollo-server-express')
const getTracks = async (_, {
    input,
    sort,
    pagination
}, {
    models
}) => {
    try {
        let actorID = input ?.actorID;
        const sortItem = {
            like: sort ?.like,
            updatedAt: sort ?.updatedAt,
            createdAt: sort ?.createdAt,
            view: 1,
            trackName: sort ?.trackName
        }
        const paginationItem = {
            limit: pagination ?.limit || 20,
            skip: pagination ?.skip || 1,
        }
        const trackItem = await models.track.find(actorID && {
            actors: {
                $elemMatch: {
                    _id: actorID
                }
            }
        }).limit(paginationItem.limit).skip(paginationItem.limit * (paginationItem.skip - 1)).sort(sortItem);
        return trackItem
    } catch (error) {
        console.log(error);
        throw new ApolloError(error)
    }
}
module.exports = getTracks