const path = require("path");

function demo() {
  // Basename

  console.log(path.basename(__filename));

  // directory name
  console.log(path.dirname(__filename));

  // File extension
  console.log(path.extname(__filename));

  // Create path object
  console.log(path.parse(__filename).root);

  //  Concatenate paths

  console.log(path.join(__dirname, "test", "hello"));
}

module.exports = demo;
