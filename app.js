const config = require("config")
const mongoose = require("mongoose");
const {ApolloServer} = require("apollo-server")

const  PORT =  config.get("port") || 5000;

const typeDefs = require("./graphql/typeDefs");
const resolvers = require('./graphql/resolvers');
const server = new ApolloServer({
    typeDefs,
    resolvers
})

mongoose.set('strictQuery', true);

async function start (){
    try {

        await mongoose.connect(config.get("mongoUri"),{
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        server.listen(PORT, () => console.log(`App has been started on port ${PORT}`) )
    }
    catch (e){
        console.log(`error msg : ${e}`);
    }
};
start()