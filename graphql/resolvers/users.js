const User = require("../../models/User");
const { ApolloError } = require("apollo-server-errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../../utils/sendEmail");
const Token = require("../../models/token")
const crypto = require("crypto")
const  ObjectID = require('mongodb').ObjectId;

const config = require("config")

module.exports = {
    Mutation: {
        async registerUser(_, { registerInput: {email, password, firstName, lastName} }){
            //see if an old user exists
            const oldUser = await User.findOne({email});

            //Throw error if exists
            if(oldUser){
                throw new ApolloError("User is alreday Exists", "USER_ALREADY_EXISTS");
            }

            if(password.length < 8) {
                throw new ApolloError("Password is short", "SHORT_PASSWORD");
            }
            //Encrypt password
            var encryptedPassword = await bcrypt.hash(password, 12)

            //build out mongoose model
            const newUser = new User({
                email: email.toLowerCase(),
                password: encryptedPassword,
                firstName: firstName,
                lastName: lastName
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

            const newToken = await new Token({
                userId: res._id,
                token: crypto.randomBytes(32).toString("hex")
            }).save();

            const verifyCode = Math.floor(100000 + Math.random() * 900000);
            await  sendEmail(res.email, verifyCode)
            return {
                id: res.id,
                ...res._doc,
            }
        },

        async loginUser(_, { loginInput: {email, password} }) {
            // see if a user exists
            const user = await User.findOne({email});

            //check if the entered password is true
            if (user && ( await bcrypt.compare( password, user.password ))){
                //wheter user verified
                if(!user.verified){
                    const verifyToken = await Token.findOne({"userId": ObjectID(user._id)});
                    const url = `${config.get("BASE_URL")}emailVerify/users/${user._id}/verify/${verifyToken.token}`;
                    await  sendEmail(user.email, url);
                    throw new ApolloError("Please Verify Your Email !", "USER_DOESNT_VERIFIED");
                }

                //create a new token
                const token = jwt.sign(
                    { user_id:user._id, email},
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
                throw new ApolloError("The User email or password provided is incorrect", "USER_DATA_WRONG");
            }
        },

        async verifyUser(_, { verifyEmail: {userId, token} }) {
            const user = await User.findOne({_id: userId});

            if(!user) throw new ApolloError("User Token wrong", "USER_TOKEN_WRONG");

            const sendedToken = await Token.findOne({
                userId: user._id,
                token: token
            })

            if(!sendedToken) throw new ApolloError("Invalid Link", "INVALID_LINK");

            await User.updateOne({_id:user._id, verified:true});
            await sendedToken.remove();
        }
    },
    Query: {
        User: (_,{ID}) => User.findById(ID)
    }
}