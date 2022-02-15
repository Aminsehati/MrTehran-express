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
            audioUrl,
            imgUrl,
            trackName,
            actors
        } = input;
        const actorsItem = await models.Actor.find({
            _id: actors
        });
        await models.track.create({
            audioUrl,
            imgUrl,
            actors:actorsItem,
            trackName
        });
        return {
            audioUrl,
            imgUrl,
            trackName,
            actors:actorsItem
        }
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = createTrack