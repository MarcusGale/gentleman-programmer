const http = require("http")
const fs = require("fs");
const port = 3000;

const server = http.createServer();

server.on("request", (req, res) => {
    const url = req.url;
    console.log(url);
    if(url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./index.html").pipe(res);
    } else if(url === "/about"){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./about.html").pipe(res);
    } else if(url === "/contact"){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./contact.html").pipe(res);
    } else if(url === "/stylesheet"){
        res.writeHead(200, {"Content-Type": "text/css"});
        fs.createReadStream("./stylesheet.css").pipe(res);
    } else if(url === "/logo"){
        res.writeHead(200, {"Content-Type": "image/png"});
        fs.createReadStream("./logo.png").pipe(res);
    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("<h3>404 Not found</h3>");
    }
});

server.on("listening", () => {
    console.log(`Server is listening on port ${port}`);
});

server.listen(port);

document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector('.animate-text');
    const textContent = text.textContent;
    text.textContent = '';

    let index = 0;
    function type() {
        if (index < textContent.length) {
            text.textContent += textContent[index];
            index++;
            setTimeout(type, 100); // Adjust speed here (milliseconds)
        }
    }

    type();
});
