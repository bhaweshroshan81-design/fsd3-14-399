import http from "http";

const server = http.createServer();
server.on('request', (req, res) =>{
    res.end("<h1>SIH Interal</h1>")
    });

server.listen(5000, () => {               // nameless function
    console.log("SHI Server is running on port 5000...")

})