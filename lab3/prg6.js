import { writeFile} from "fs/promises";

for (let i = 0; i < 1000; i++) {
    await writeFile('big.txt', `Hello Buddy: ${i}\n`, { flag: 'a' });
}