const {
    gql
} = require('apollo-server-express')
module.exports = gql `
type Mutation {
    registerUser:User,
}
type User {
    firstName:String,
    lastName:String,
}
`