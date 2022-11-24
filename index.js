import express from 'express';

const PORT = 8080;


const app = express();



app.listen(PORT, () => {
    console.log('express app started on port => ' + PORT);
});