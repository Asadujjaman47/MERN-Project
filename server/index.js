const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.umejdfy.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`);

// GET request
// app.get("/getUsers", (req, res) => {
//     UserModel.find({}, (err, result) => {
//         if(err) {
//             console.log(err);
//             res.json(err);
//         } else {
//             res.json(result)
//         }
//     });
// }); 
// this upper code give error: MongooseError: Model.find() no longer accepts a callback

app.get("/getUsers", (req, res) => {
    UserModel.find({})
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
});
// or
// app.get("/getUsers", async (req, res) => {
//     try {
//         const result = await UserModel.find({});
//         res.json(result);
//     } catch (err) {
//         res.json(err);
//     }
// });


// POST request
app.post("/createUser", async(req, res) => {
    try{
        const user = req.body;
        
        const newUser = new UserModel(user);
        await newUser.save();

        res.json(newUser);
    }
    catch (err){
        res.json(err);
    }
})

app.listen(3001, () => {
    console.log("Server running at 3001...");
})