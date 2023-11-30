const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const index = express();

index.use(bodyParser.json());
index.use(cors());

const port = process.env.PORT || 9000;

index.use(express.json());

// Available routes
index.use("/api/auth", require("./routes/auth"));
index.use("/api/notes", require("./routes/notes"));

index.listen(port, () => {
  console.log(`Server is running on - http://localhost:${port}`);
});
