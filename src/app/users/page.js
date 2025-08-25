import UsersList from "./components/UserList";
import { users } from "../data/mocs";

export default function UsersPage() {
    //TODO : obtener los usuarios desde un API
    return (
        <div className="container">
            <UsersList users={users} />
        </div>
    );
}