import http from "http";

const server = http.createServer();
server.on('request', (req, res) =>{
    res.write("Welcome to Server Side Programming");
        res.end("<h1></h1>");
        res.write ("<h2>Nodemon is tacking the files</h2>")
});

server.listen(5000, () => {               // nameless function
    console.log("Server is runnig")

})