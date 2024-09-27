require("dotenv").config(); // Load environment variables

const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("MongoDB connection error: ", err));

// // Optional: Check for connection events
// mongoose.connection.on("connected", () => {
//     console.log("Mongoose connected to DB");
// });

// mongoose.connection.on("error", (err) => {
//     console.log("Mongoose connection error: " + err);
// });

// mongoose.connection.on("disconnected", () => {
//     console.log("Mongoose disconnected from DB");
// });

// Schema for users
const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        }
    }
);

const User = mongoose.model("User", userSchema);

module.exports = {
    User: User
};
