import http from 'http';
import {readFile} from 'fs/promises';

const server = http.createServer(async (req, res) => {
    try {
        const text = await readFile('big.txt');
        res.end(text);
    } catch (error) {
        res.statusCode = 500;
        res.end('Error reading file');
    }
});
 server.listen(3000, () => console.log('Server is running'));