import { useEffect, useState } from "react"
import User from "./User";
import "./user.css"

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const usersDataLoad = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json()
            setUsers(data);
        }
        usersDataLoad()
    }, [])

    return (
        <div className="user">
            <h3>Users: {users.length}</h3>
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
    )
}