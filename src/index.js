//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const port = 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const publicFilePath = path.join(__dirname, 'public')

app.listen(3000, () => {
    console.log(`Listening on port ${port}`);
})

app.get('/', (req, res) => {
    res.sendFile(path.join(publicFilePath, 'index.html'));
})

app.use(express.urlencoded({ extended: true }))

app.post('/check', checkPassword, (req, res) => {
    console.log("Password verified, redirecting to secret page...");
    res.sendFile(path.join(publicFilePath, 'secret.html'));
})

function checkPassword(req, res, next) {
    console.log("Checking password...");
    if (req.body['password'] === 'crscourse') {
        next();
        return;
    }

    console.log('Password incorrect. Please try again.')
    res.sendFile(path.join(publicFilePath, 'index.html'));
}