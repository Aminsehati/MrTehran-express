const {gql}= require('apollo-server-express')
module.exports =  gql `
scalar FileUpload
type Mutation  {
    uploadImage(file: FileUpload!): File,
    uploadAudio(file: FileUpload!):File
}
type File {
    url:String,
}
`