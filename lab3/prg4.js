import http from "http"

const server = http.createServer((req,res) => {
    if(req.url=='/')
        res.end('<h2>Product Page</h2>')

else if (req.url =='/cart'){
        res.end("<h2>Cart</h2>")
}else if (req.url =="/checkout"){
        res.end(`<h3> Checkout</h3>
                   <h3>price: 2500</h3>
                   <p>Discount: 5%</p>
                   <a herf = '#'>Buy Now</a>`) ;
                }else {
                    res.end("404, Not found")
                }
            }
);