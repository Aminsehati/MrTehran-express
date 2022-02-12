const {
    ApolloError
} = require('apollo-server-express')
const createTrack = async (_, {
    input
}, {
    models
}) => {
    try {
        const {
            actorID,
            audioUrl,
            imgUrl,
            trackName
        } = input;
        const actor = await models.Actor.findOne({
            _id: input.actorID
        });
        await models.track.create({
            actorID,
            audioUrl,
            imgUrl,
            trackName,
            actorName: actor.name
        });
        return {
            actorID,
            audioUrl,
            imgUrl,
            actorName: actor.name,
            trackName
        }
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = createTrack