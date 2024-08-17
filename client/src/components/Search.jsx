import React, { useEffect, useState } from 'react'
import Table from './Table';
import axios from 'axios';

const Search = () => {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await axios.get(`http://localhost:5000?q=${query}`);
            setUsers(res.data)
        };

        if (query.length === 0 || query.length > 2) {
            fetchUsers();
        }
    }, [query]);

    return (
        <div>
            <input
                type='text'
                className='search'
                placeholder='Search...'
                onChange={(e) => setQuery(e.target.value)}
            />

            <Table data={users} />
        </div>
    )
}

export default Search