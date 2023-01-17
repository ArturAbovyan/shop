const { AuthenticationError } = require("apollo-server");

const jwt = require("jsonwebtoken");

module.exports = (context) => {
    //context header
    const authHeader = context.req.headers.authorization;

    if( authHeader ) {
        //bearer ..

        const token = authHeader.split("Bearer")[1];

        if (token) {
            try {
                const user = jwt.verify(token, "UNSAFE_STRING");
                return user;
            }catch (error){
                throw new AuthenticationError('INVALID/EXPIRED TOKEN')
            }
        }
        throw new Error("Authentication token must be 'Bearer [token]")
    }
    throw new Error("Authorization header must be provided")
}

