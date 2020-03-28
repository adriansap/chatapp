import React from 'react';
import Navy from './components/Navy'
import Employees from './Employees.json'

function Main() {
    return (

        <div>
         <Navy  employees={Employees} />
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <h2></h2>
                    </div>
            
                </div>
                <a href="/chat">
                    <center> <img src={process.env.PUBLIC_URL + '/shopchat-logo2.PNG'} alt="mainpic" width="620px" height="600px" /></center>
                </a>
                <center><h2>a community that stays connected </h2></center>
            </div >
        </div>
    )
}

export default Main;