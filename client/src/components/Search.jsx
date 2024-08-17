import React, { useState } from 'react'
import Table from './Table';

useEffect(() => {
    const fetchUsers = async () => {
        const res = await
    }
}, []);

const Search = () => {
    const [query, setQuery] = useState("");

    const keys = ['first_name', 'last_name', 'email'];

    const filteredUsers = (data) => {
        return (
            data.filter(item =>
                // item.first_name.toLowerCase().includes(query) ||
                // item.last_name.toLowerCase().includes(query) ||
                // item.email.toLowerCase().includes(query)
                keys.some(key => item[key].toLowerCase().includes(query))
            )
        );
    };

    return (
        <div>
            <input
                type='text'
                className='search'
                placeholder='Search...'
                onChange={(e) => setQuery(e.target.value)}
            />

            <Table data={filteredUsers(Users)} />
        </div>
    )
}

export default Search