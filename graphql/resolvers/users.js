const User = require("../../models/User");
const { ApolloError } = require("apollo-server-errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

module.exports = {
    Mutation: {
        async registerUser(_, { registerInput: {email, password} }){
            //see if an old user exists
            const oldUser = await User.findOne({email});

            //Throw error if exists
            if(oldUser){
                throw new ApolloError("User is alreday Exists", "USER_ALREADY_EXISTS");
            }

            //Encrypt password
            var encryptedPassword = await bcrypt.hash(password, 12)

            //build out mongoose model
            const newUser = new User({
                email: email.toLowerCase(),
                password: encryptedPassword
            })

            //create out JWT ( attatch to our User )
            const token = jwt.sign(
                { user_id:newUser._id, email},
                "UNSAFE_STRING",
                {
                    expiresIn: "1h"
                }
            );
            newUser.token = token;

            //Save our user
            const res = await newUser.save();

            return {
                id: res.id,
                ...res._doc
            }
        },

        async loginUser(_, { loginInput: {email, password} }) {
            // see if a user exists
            const user = await User.findOne({email});

            //check if the entered password is true
            if (user && ( await bcrypt.compare( password, user.password ))){
                //create a new token
                const token = jwt.sign(
                    { user_id:newUser._id, email},
                    "UNSAFE_STRING",
                    {
                        expiresIn: "1h"
                    }
                );
                //attach token to user model
                user.token = token;

                return {
                    id: user.id,
                    ...user._doc
                }
            }
            // if user doesn't exist, return error
            else {
                throw new ApolloError("User Doesn't Exists", "USER_DOESNT_EXISTS");
            }
        }

    },
    Query: {
        User: (_,{ID}) => User.findById(ID)
    }
}