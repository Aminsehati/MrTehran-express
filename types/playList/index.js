const {
    gql
} = require('apollo-server-express')


module.exports = gql `
type Query {
    getPlayLists : [playList],
    getPlayList(id:ID) : playList,
    getPlayListsCount:Int!
}
type playList {
    _id:String,
    name : String ,
    imgUrl:String,
    coverImgUrl:String,
    Followers:Int
}
input createPlayListInput {
    name:String!,
    imgUrl:String!,
    coverImgUrl:String!,
}
type Mutation {
    createPlayList(input : createPlayListInput!) : playList,
    deletePlayList(id:ID!):playList
}
`