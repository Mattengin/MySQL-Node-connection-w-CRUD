import express from 'express';

let app = express();

app.listen(3000, () => {
    console.log('Application listening on port 3000');
});