const { gql } = require("apollo-server")

module.exports = gql`
    type User {
        email: String
        password: String
        firstName: String
        lastName: String
        token: String
        userId: String
    }
    
    input VerifyEmail{
        userId: String
        token: String
    }
    
    input LoginInput{
        email: String
        password: String
    }
    
    input RegisterInput{
        email: String
        password: String
        firstName: String
        lastName: String
    }
    
    type Query {
        User(id: ID!): User
    }
    
    type Mutation {
        registerUser(registerInput: RegisterInput): User
        loginUser(loginInput: LoginInput): User
        verifyUser(verifyEmail: VerifyEmail): User
    }
`