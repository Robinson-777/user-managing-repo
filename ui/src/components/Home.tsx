import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Users } from './Users'
import CreateUser from './CreateUser'

function Home() {




  return (
    <>
      <CreateUser></CreateUser>
      <hr></hr>
      <Users></Users>
    </>
  );
}

export default Home;

