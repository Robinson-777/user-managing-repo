import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Header from './Header'
import { UserService, UsersModel } from '../services/UserService'
import SideBar from './SideBar';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions';

function Layout() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const userService = new UserService();
    // const [usr, setUsr] = useState([]);
   

    useEffect(() => {
        userService.getAllUsers().then((users: UsersModel[]) => {
            dispatch(setUser(users ? users : []));
            navigate("/home");
        }).catch((error) => {
            toast.error("something went wrong", { position: toast.POSITION.TOP_CENTER });
        });
        return () => { }
    }, [])


    return (
        <div className="App">
            <Header></Header>
            <div id="outer-container">
                <div id="sidebar"><SideBar></SideBar></div>
                <div id="content"> <Outlet /></div>
            </div>
        </div>
    );
}

export default Layout;
