import React, { useState } from 'react'
import { Users } from '../users'

const Search = () => {
    const [query, setQuery] = useState("");

    // console.log(Users.filter(user => user.first_name.includes(query)))
    const filteredUsers = Users.filter(user => user.first_name.toLowerCase().includes(query));
    
    return (
        <div>
            <input
                type='text'
                className='search'
                placeholder='Search...'
                onChange={(e) => setQuery(e.target.value)}
            />

            <ul className="list">
                {filteredUsers.map((user) => (
                    <li key={user.id} className="listItem">{user.first_name}</li>
                ))}

            </ul>
        </div>
    )
}

export default Search