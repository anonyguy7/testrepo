import express from 'express';

const app = express();

app.get("/" , (req , res) => {
    res.send("Hello to the Contributors!!!");
})

app.listen(3000 , () => {
    console.log(`backend running: http://localhost:3000`)
});