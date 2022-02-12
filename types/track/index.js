const {
    gql
} = require('apollo-server-express')


module.exports = gql `
type Query {
    getTracks(input:getTracksInput):[Track],
    getTrack(id:ID!):Track
}
type Track {
    _id:String,
    actorID:String,
    imgUrl:String,
    audioUrl:String,
    actorName:String,
    trackName:String
}
input getTracksInput {
    actorID:ID,
}
input createTrackInput {
    actorID:String!,
    imgUrl:String!,
    audioUrl:String!,
    trackName:String!
}
type Mutation {
    createTrack(input : createTrackInput!):Track
}
`