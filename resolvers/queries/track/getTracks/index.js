const {
    ApolloError
} = require('apollo-server-express')
const getTracks = async (_, {
    input
}, {
    models
}) => {
    try {
        let actorID = input ?.actorID;
        const trackItem = await models.track.find(actorID && {
            actors: {
                $elemMatch: {
                    _id: actorID
                }
            }
        });
        return trackItem
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = getTracks