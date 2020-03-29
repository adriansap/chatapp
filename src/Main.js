import React from 'react';
import Navy from './components/Navy'
import Employees from './Employees.json'
import Food from './food.png'

function Main() {
    return (

        <div  styles={{ backgroundImage:`url(${Food})` }}>           
         <Navy employees={Employees} />
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <h2></h2>
                    </div>

                </div>
                <a href="/chat">
                    <center> <img src={process.env.PUBLIC_URL + '/cat-yellow-bg.jpg'} width="700" height="800" alt="mainpic" /></center>
                </a>
                <center><h2>a community that stays connected </h2></center>
            </div >
        </div>
    )
}

export default Main;