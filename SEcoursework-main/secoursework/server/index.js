const express = require('express')
const app = express()
const cors = require("cors");
app.use(express.json());
app.use(cors());

const db = require('./models')

// Routers
const routerPost = require('./routes/Posts')
app.use("/posts", routerPost);

const routerComment = require('./routes/Comment')
app.use("/comment", routerComment);

db.sequelize.sync().then(() =>{
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});

