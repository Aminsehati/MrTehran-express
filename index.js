const express = require('express')

const {
    ApolloServer
} = require('apollo-server-express')
const typeDefs = require('./types')
const resolvers = require('./resolvers');
const dotenv = require('dotenv');
const database = require('./config/database');
const {
    GraphQLUpload,
    graphqlUploadExpress
} = require("graphql-upload");
const {
    ApolloServerPluginLandingPageGraphQLPlayground
} = require('apollo-server-core');
dotenv.config();
database();
const models = require('./models')
const cors = require('cors');
app.use(cors())
const app = express();
async function startExpressApolloServer() {
    app.use(graphqlUploadExpress())
    const server = new ApolloServer({
        FileUpload: GraphQLUpload,
        resolvers,
        typeDefs,
        context() {
            return {
                models
            }
        },
        introspection: true,
        plugins: [
            ApolloServerPluginLandingPageGraphQLPlayground()
        ]
    });
    await server.start();
    server.applyMiddleware({
        app,
        path: '/graphql'
    });
    const port = process.env.PORT || 3001;
    await new Promise(resolve => app.listen({
        port
    }, resolve));
    console.log(`🚀 Server ready at ${port}`);
    return {
        server
    }
}
app.use(express.static('uploads'))
startExpressApolloServer();
module.exports = app;