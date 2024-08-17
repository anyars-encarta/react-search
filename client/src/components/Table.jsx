import React from 'react'

const Table = ({ data }) => {
    return (
        <table>
            <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                </tr>

                {data.map(({ id, first_name, last_name, email, gender }) => (
                    <tr key={id}>
                        <td>{first_name}</td>
                        <td>{last_name}</td>
                        <td>{email}</td>
                        <td>{gender}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table