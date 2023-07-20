import React, { useEffect, useState } from 'react'
import EditUserModal from './EditUserModal'
import { UserService, UsersModel } from '../services/UserService';
import { addUser, deleteUser, setUser } from '../redux/actions'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Users = () => {
    const users: UsersModel[] = useSelector((state: any) => state.users, shallowEqual)
    const dispatch = useDispatch();
    const userService = new UserService();
    const navigate = useNavigate();
    const [isNavigate, setIsNavigate] = useState(false);


    useEffect(() => {
        if (isNavigate) {
            navigate("/addUser");
        }
        return () => { }
    }, [isNavigate])


    function delUser(userId: number) {
        userService.deleteUser(userId).then(response => {
            if (response.status == "true") {
                console.log(response)
                dispatch(deleteUser(userId))
                toast.success("user has deleted sucessfully", { position: toast.POSITION.TOP_CENTER });
            }
        }).catch((error) => {
            toast.error("something went wrong", { position: toast.POSITION.TOP_CENTER });
        });
    }

    function fnAddUser() {
        setIsNavigate(true);
    }
    console.log('users length:::', users)
    // if (users.length === 0) return null

    const UserRow = (user: UsersModel, index: number) => {

        return (
            <tr key={user._id} className={index % 2 === 0 ? 'odd' : 'even'}>
                {/* <td>{user._id}</td> */}
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                    <div className="row">
                        <div className="col-md-6">
                            {user.emailId}
                        </div>
                        <div className="col-md-3">
                            {/* userEdited={userEdited} */}
                            <EditUserModal user={user} />
                        </div>
                        <div className="col-md-3">
                            <button type="button" onClick={(e) => delUser(user._id)} className="btn btn-danger right">Delete</button>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }

    const userTable = users.map((user: UsersModel, index) => UserRow(user, index))
    return (
        <div className="container">
            <h2>Users</h2>
            <button className='btn btn-primary btnAlignRight' onClick={fnAddUser}>Create User</button>
            <hr></hr>
            {(users.length != 0) && <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {userTable}
                </tbody>
            </table>
            }
        </div>
    )
}