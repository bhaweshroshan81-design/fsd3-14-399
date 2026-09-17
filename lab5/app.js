import express from "express";

const app =express();

app.get ("/", (req,res)=>{
    res.send("<h1>Hello Express");
});

app.get('/about', (req,res)=>{
    res.send("We are FSD developers");
});

app.post('/login', (req,res)=>{
    res.send({msg:'user login'});
});

app.put('/user/update', (req,res)=>{
    res.send({msg:'user update'});
});

app.delete('/user/delete', (req,res)=>{
    res.send({msg:'user delete'});
});

app.use((req,res)=>{
    res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3333, ()=>{
    console.log("Server is running on port 3333");
});
