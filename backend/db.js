const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/mongodb");

mongoose
  .connect("mongodb://127.0.0.1:27017/inotebook")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Connection error: ", err));

// mongoose.connection.on("connected", () => {
//     console.log("MongoDB Connected");
// });
// mongoose.connection.on("error", (err) => {
//     console.error("Connection error: ", err);
// });

module.exports = mongoose;
