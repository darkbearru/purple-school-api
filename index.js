import express from 'express';

const port = 8900;
const app = express();

app.get ('/', (req, res) => {
    res.send('First page');
});
app.get ('/hello', (req, res) => {
    res.send('Hello, motherfucker!');
});

app.listen(port, () => {
    console.log (`Server started on ${port} port`);
})