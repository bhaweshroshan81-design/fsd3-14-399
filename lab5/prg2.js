import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";   

const app = express();
const Port = 3333;  

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);     

