


const express = require("express")
const app = express()
app.use(express.json())
const cors = require("cors")

app.use(cors({}))


const PORT = 3000


const { createUser ,validateUser } = require("./types")
const { User } =require("./db")


    /// take the input from the frontend 
    
    // if they are valid check if it already exist 
    // if not exist then put them in database 
    // res send response as user created 

    // username = req.body.username;
    // email  = req.body.email;
    // password = req.body.password;
    app.post("/signup", async function (req, res) {
        const createPayload = req.body;
        const parsedPayload = createUser.safeParse(createPayload);
    
        if (!parsedPayload.success) {
            res.status(411).json({
                msg: "You sent invalid inputs",
                errors: parsedPayload.error.errors
            });
            return;
        }
    
        try {
            await User.create({
                username: createPayload.username,
                email: createPayload.email,
                password: createPayload.password
            });
    
            res.json({ msg: "User created" });


        } catch (error) {
            res.status(500).json({
                msg: "There was an error while saving the user in the database",
                error: error
            });
        }
    });
    

app.post("/login", async function (req, res) {
    // Extract username and password from the request body
    const { username, password } = req.body;

    // Check if inputs are present
    if (!username || !password) {
        return res.status(400).json({
            msg: "Please provide both username and password."
        });
    }

    try {
        // Check if the user exists in the database
        const user = await User.findOne({ username: username });

        // If the user does not exist
        if (!user) {
            return res.status(404).json({
                msg: "User not found."
            });
        }

        // If user is found, verify the password
        // Assuming passwords are stored in plaintext (which is not recommended) — usually, you'd hash the password
        if (password === user.password) {

            return res.redirect('/dashboard');

        } else {
            return res.status(401).json({
                msg: "Invalid password."
            });
        }

    } catch (error) {
        // Handle any errors
        return res.status(500).json({
            msg: "An error occurred during login.",
            error: error
        });
    }
});

app.get("/dashboard",function (req,res) {
    

    res.send("login successfull")
})


app.listen(PORT,()=>{
    console.log("server listening on port 3000")
})
