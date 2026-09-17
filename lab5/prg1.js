import express from "express";
import path from "path";
import{ fileURLToPath } from "node:url";

const app =express();
const Port = 3333;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"public", "index.html"));
});

app.get("/match", (req, res)=>{
    res.sendFile(path.join(__dirname,"public", "match.html"));
});

app.get('/stories', (req, res)=>{
    res.sendFile(path.join(__dirname,"public", "stories.html"));
});

app.listen(Port, ()=>{
    console.log(`Server is running on port ${Port}`);
});