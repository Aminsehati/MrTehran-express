const {
    gql
} = require('apollo-server-express')

module.exports = gql `
    scalar DateTime
    type Query {
    getTracks(input:getTracksInput):[Track],
    getTrack(id:ID!):Track
}
type Track {
    _id:String,
    imgUrl:String,
    audioUrl:String,
    trackName:String,
    actors:[Actor],
    createdAt:DateTime,
    updatedAt:DateTime,
    view:Int,
    like:Int
}
input getTracksInput {
    actorID:ID,
}
input createTrackInput {
    imgUrl:String!,
    audioUrl:String!,
    trackName:String!,
    actors:[ID]!,
}
input likeTrackInput {
    trackID:ID!,
}
input dilikeTrackInput {
    trackID:ID!,
}
type Mutation {
    createTrack(input : createTrackInput!):Track,
    deleteTrack(id:ID!):Track,
    likeTrack(input:likeTrackInput!):Track,
    dislikeTrack(input:dilikeTrackInput!):Track,
}
`