'use client';
import UsersList from "./components/UserList";
//import { users } from "../data/mocs";//

import { useEffect, useState } from "react";
export default function UsersPage() {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        const fetchUsers = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/ORT-PabloFernandez/PNTP2-REACT-EJEMPLO/refs/heads/main/src/data/usersv2.json');
                const data = await response.json();

                setUsers(data);
                setLoading(false);
            }
            catch (error) {
                console.error('Error al cargar usuarios', error);
            }
        }

        fetchUsers();
    }, []);
    return (
        <div className="container">
            <UsersList users={users} />
        </div>
    );
}