import { Outlet, NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/adduser">Add User</NavLink>
                </li>
                <li>
                    <NavLink to="/users">User Details</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default SideBar;