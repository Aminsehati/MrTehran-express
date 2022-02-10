const {
    gql,
} = require('apollo-server-express')


module.exports = gql `
scalar FileUpload
type Mutation  {
    uploadImage(file: FileUpload!): File,
}
type FieldUpload{
      url:String!
}
type File {
    url:String,
}
`