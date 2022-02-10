const {
    gql
} = require('apollo-server-express')




module.exports = gql `
type Query {
    getActors: [Actor],
    getActor(id:ID!):Actor
}
input createActorInput {
    name:String!,
    imgUrl:String,
    coverImgUrl:String
}
type Mutation {
    CreateActors(input : createActorInput!) : Actor
}
type Actor {
    _id:String,
    name : String ,
    imgUrl:String,
    coverImgUrl:String,
    Followers:Int!
}
`