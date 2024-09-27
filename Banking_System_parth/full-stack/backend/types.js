const zod = require("zod");

// Schema for creating a user
const createUser = zod.object({
    username: zod.string(), // Validate username as a string
    email: zod.string().email(), // Validate email as a valid email string
    password: zod.string().min(6) // Validate password with a minimum length of 6 characters
});

// Schema for user login validation
const validateUser = zod.object({
    username: zod.string(), // Validate username as a string
    password: zod.string() // Validate password as a string (no min length constraint here)
});

module.exports = {
   createUser: createUser,
   validateUser: validateUser
};
