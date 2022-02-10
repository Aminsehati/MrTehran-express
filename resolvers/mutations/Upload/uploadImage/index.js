const {
    ApolloError
} = require('apollo-server-express')
const fs = require('fs')
const path = require('path')

const uploadImage = async (_, {
    file
}) => {
    try {
        const {
            filename,
            createReadStream
        } = await file[0].file;
        const folderName = "images";
        const location = path.join(__dirname, `../../../../uploads/${folderName}/${filename}`);
        const myfile = await createReadStream();
        await myfile.pipe(fs.createWriteStream(location))
        return {
            url: `${filename}`
        }
    } catch (error) {
        throw new ApolloError(error)
    }
}
module.exports = uploadImage