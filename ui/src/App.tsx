import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import CreateUser from './components/CreateUser';
import { Users } from './components/Users';
import Layout from './components/Layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/adduser' element={<CreateUser />} ></Route>
              <Route path='/users' element={<Users />} ></Route>
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Route>
            {/* <Route path='/users' element={<Users />} ></Route> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )

}

export default App;