// const fs = require("fs");
// const path = require("path");
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-type": "text/html" });
//   if (req.url === "/") {
//     fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
//       res.end(data);
//     });
//   }
//   if (req.url === "/api/users") {
//     const users = [
//       { name: "John Doe", age: 30 },
//       { name: "Michael bougley", age: 213 },
//     ];

//     res.writeHead(200, { "Content-type": "application/json" });
//     res.end(JSON.stringify(users));
//   }
// });

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
// const fs = require("fs");
// const path = require("path");
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-type": "text/html" });
//     fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
//       if (err) {
//         console.log(err);
//       }
//       res.end(data);
//     });
//   }

//   if (req.url === "/api/users") {
//     const users = [
//       { name: "John Doe", age: 800 },
//       { name: "Lyzer da", age: 500 },
//     ];

//     res.writeHead(200, { "Content-type": "application/json" });
//     res.end(JSON.stringify(users));
//   }
// });

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

// const fs = require("fs");
// const path = require("path");
// const http = require("http");

// const server = http.createServer((req, res) => {
//   let filePath = path.join(
//     __dirname,
//     "public",
//     req.url === "/" ? "index.html" : req.url
//   );

//   let extname = path.extname(filePath);

//   let contentType = "text/html";

//   switch (extname) {
//     case ".js":
//       contentType = "text/javascript";
//       break;
//     case ".css":
//       contentType = "text/css";
//       break;
//     case ".json":
//       contentType = "application/json";
//       break;
//     case ".png":
//       contentType = "image/png";
//       break;
//     case ".jpg":
//       contentType = "image/jpg";
//       break;
//   }

//   fs.readFile(filePath, (err, content) => {
//     if (err) {
//       if (err.code == "ENOENT") {
//         fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
//           res.writeHead(200, { "Content-type": "text/html" });
//           res.end(data, "utf8");
//         });
//       } else {
//         res.writeHead(500);
//         res.end(`Server Error: ${err.code}`);
//       }
//     } else {
//       res.writeHead(200, { "Content-type": contentType });
//       res.end(content, "utf8");
//     }
//   });
// });

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
const fs = require("fs");
const path = require("path");
const http = require("http");

const server = http.createServer((req, res) => {
  const filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : "404.html"
  );
  const extname = path.extname(filePath);
  const contentType = "text/html";

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.conde == "ENOENT") {
        fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
          res.writeHead(200, { "Content-type": "text/html" });
          res.end(data, "utf8");
        });
      } else {
        res.writeHead(500);
        res.end(`Server error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-type": contentType });
      res.end(data, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
