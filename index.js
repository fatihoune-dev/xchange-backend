const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 5000;

// Configuration
mongoose.connect("mongodb://localhost:27017/xchange");

// parse application/json
app.use(cors());
app.use(bodyParser.json());

// loading routes
const users = require("./routes/users");
const documents = require("./routes/documents");

// Routes middleware
app.use("/users", users);
app.use("/documents", documents);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
