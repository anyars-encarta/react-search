import express from 'express';
import cors from 'cors';

const port = '5000'
const app = express();

app.use(cors());

app.get('/', (req, res) => {

});

app.listen(port, () => console.log(`API is working and running on port ${port}`))
