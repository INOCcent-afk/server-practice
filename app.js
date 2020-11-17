// // const Person = require("./person");
// // const logo = require("./reference/path_demo");
// // const person1 = new Person("John doe", 30);

// // person1.greeting();

// // logo();

// // const fs = require("fs");
// // const path = require("path");

// // // Create a folder
// // // fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
// // //   if (err) throw err;
// // //   console.log("folder created");
// // // });

// // fs.writeFile(
// //   path.join(__dirname, "/test", "Hello.txt"),
// //   "Hello World!",
// //   (err) => {
// //     if (err) throw err;
// //     console.log("File written");
// //     fs.appendFile(
// //       path.join(__dirname, "/test", "Hello.txt"),
// //       "I love Node.js",
// //       (err) => {
// //         if (err) throw err;
// //         console.log("File written");
// //       }
// //     );
// //   }
// // );

// // const fs = require("fs");
// // const path = require("path");

// // fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
// //   if (err) throw err;
// //   console.log("folder created");
// // });

// // fs.writeFile(
// //   path.join(__dirname, "/test", "hello.txt"),
// //   "HEllo world ",
// //   (err) => {
// //     if (err) throw err;
// //     console.log("file written");

// //     fs.appendFile(
// //       path.join(__dirname, "/test", "hello.txt"),
// //       "I love node and react",
// //       (err) => {
// //         if (err) throw err;
// //         console.log("file written");
// //       }
// //     );
// //   }
// // );

// // Read File
// // fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
// //   if (err) throw err;
// //   console.log(data);
// //   console.log("folder created");
// // });

// // fs.rename(
// //   path.join(__dirname, "/test", "helloWorld.txt"),
// //   path.join(__dirname, "/test", "POTA.txt"),
// //   (err) => {
// //     if (err) throw err;
// //     console.log("rename file");
// //   }
// // );

// // const os = require("os");

// // // PLatform

// // console.log(os.platform());

// // console.log(os.arch());

// // console.log(os.cpus());

// // console.log(os.freemem());

// // console.log(os.totalmem());

// // console.log(os.homedir());

// // console.log(os.uptime());

// // const url = require("url");

// // const myUrl = new URL("http://mywebsite.com/hello.html?id=100&status=active");

// // console.log(myUrl.href);
// // console.log(myUrl.toString());
// // console.log(myUrl);

// // myUrl.searchParams.append("abc", "123");
// // console.log(myUrl.searchParams);

// // myUrl.searchParams.forEach((value, name) => {
// //   console.log(value, name);
// // });

// // const EventEmitter = require("events");
// // const Logger = require("./logger");

// // const logger = new Logger();

// // logger.on("messsage", (data) => console.log(`called listener ${data}`));

// // class MyEmitter extends EventEmitter {}

// // const myEmitter = new MyEmitter();

// // myEmitter.on("event", () => {
// //   console.log("event fired");
// // });

// // myEmitter.emit("event");
// // myEmitter.emit("event");
// // myEmitter.emit("event");
// // myEmitter.emit("event");

// // const http = require("http");

// // http
// //   .createServer((req, res) => {
// //     res.write("hello world");
// //     res.end();
// //   })
// //   .listen(5000, () => console.log("server running"));

// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.write("Hlelo BITCHES BACKEDNDERS");
//     res.end();
//   })
//   .listen(5000, () => {
//     console.log("server running");
//   });

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

const fs = require("fs");
const path = require("path");
const http = require("http");

const server = http.createServer((req, res) => {
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  let extname = path.extname(filePath);

  let contentType = "text/html";

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

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
          res.writeHead(200, { "Content-type": "text/html" });
          res.end(data, "utf8");
        });
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-type": contentType });
      res.end(content, "utf8");
    }
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
