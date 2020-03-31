import React from 'react';
import Navy from './components/Navy'

function Userdashboard() {

    let headerstyles = {
        fontSize: '25px',
        backgroundColor: 'yellow',
    }

    let favoritestyles = {
        fontSize: '20px',
    }

    return (
        <div>

            <Navy />
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <center><div style={headerstyles}>@sampleuser's Dashboard</div></center>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-8">
                        <h2 styles={favoritestyles}>Your Favorites:</h2>
                        <ul><a href="/jppizza">@JP Pizza</a></ul>
                        <ul><a href="#">@Sushi Masters</a></ul>
                    </div>
                    <div class="col-md-4">
                        <img src=" https://res.cloudinary.com/dejaksfsk/image/upload/v1585666396/mock-profile-holder_oss3ok.png" />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <h2>Your Blog Posts:</h2>
                        <ul><strong>@sampleuser: </strong>"Loved @JPPizza new weekend special"</ul>
                    </div>
                </div>
            </div>



        </div>

    )

}

export default Userdashboard;