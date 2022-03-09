const {
    gql
} = require("apollo-server-express")
module.exports = gql `
type Query {
    getActors(pagination :Pagination): [Actor],
    getActor(id:ID!):Actor,
    getActorsCount:Int!
}
input createActorInput {
    name:String!,
    imgUrl:String!,
    coverImgUrl:String!
}
input updateActorsInput {
    name:String!,
    imgUrl:String!,
    coverImgUrl:String!
}
type Mutation {
    CreateActors(input : createActorInput!) : Actor,
    deleteActors(id:ID!):Actor,
    updateActors(id:ID!,input : updateActorsInput!):Actor
}
type Actor {
    _id:String,
    name : String ,
    imgUrl:String,
    coverImgUrl:String,
    Followers:Int!
}
`