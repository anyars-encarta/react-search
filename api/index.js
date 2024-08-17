import express from 'express';
import cors from 'cors';
import { Users } from './users.js';

const port = '5000'
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    const { q } = req.query;

    const keys = ['first_name', 'last_name', 'email'];

    const filteredUsers = (data) => {
        return (
            data.filter(item =>
                keys.some(key => item[key].toLowerCase().includes(q))
            )
        );
    };

    // Example for MongoDB
    // const users = User.find({$regex: q})

    res.json(filteredUsers(Users).splice(0, 10))
});

app.listen(port, () => console.log(`API is working and running on port ${port}`))
