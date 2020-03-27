import React from 'react';

function Main() {
    return (

        <div>
            <h1><a href="#"  >Login</a> <a href="#" >Register</a></h1>
            <a href="/chat">
                <center> <img src={process.env.PUBLIC_URL + '/Capture-teikautcom.PNG'} alt="mainpic" /></center>
            </a>
        </div >
    )
}

export default Main;