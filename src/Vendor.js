import React, { useState } from 'react';
import Navy from './components/Navy'
import Vendorsdb from './Vendorsdb.json'
// var fs = require('fs');


function Vendor() {
    const [vendorName, setVendorName] = useState('')

    function handleSubmit(event) {
        alert('A form was submitted: ' + vendorName);
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://localhost:8080/api/newuser"; // site that doesn’t send Access-Control-*

        fetch(url, {
            method: 'POST',
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify(vendorName)
        }).then(function (response) {
            console.log(response)
            return response.json();
            
        });

        event.preventDefault();
    }

    return (
        <div>
            <Navy vendorsdb={Vendorsdb} />
            <form onSubmit={handleSubmit}>
                <h2><a>Register your business</a></h2>
                <input onChange={event => setVendorName(event.target.value)} class="form-control" type="text" placeholder="enter business name" aria-label="Search"></input>
                <h1>{vendorName}</h1>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Vendor;