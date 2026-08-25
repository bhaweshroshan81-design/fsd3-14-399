import http from "http"

const server = http.createServer((req,res) => {
    if(req.url=='/')
        res.end('<h2>Home Page</h2>')
    else if (req.url =='/about')
        res.end("<h2>About Us Page</h2>")
    else if (req.url =="/product")
        res.end(`<h3> Mobile Phone</h3>
                   <h3>price: 2500</h3>
                   <p>Discount: 5%</p>
                   <a herf = '#'>Buy Now</a>`) ;
    else{
        res.statusCode = 404;
        res.end(`
            <h1>404, Not found</h1>
            <p>Page Not Found</p>
            <a herf = '/'>Home</a>
            `)
    }


})



server.listen(4444,() => console.log('Sever is running'))