import React, { useState } from 'react';
import Navy from './components/Navy'
import Vendorsdb from './Vendorsdb.json'
var fs = require('fs');


function Vendor() {
    const [vendorName, setVendorName] = useState('')

    function writeFileVendor() {

        fs.writeFile(`${vendorName}.html`, `
        <div>name of vendor is ${vendorName}</div>
        ` , function (err) {
            if (err) {
                return console.log(err);
            }
            // console.log("The file was saved!");
        });


        // fs.mkdir('/home', function() {
        //     fs.writeFile('/home/hello-world.txt', 'Hello world sc!\n', function() {
        //         fs.readFile('/home/hello-world.txt', 'utf-8', function(err, data) {
        //             console.log(data);
        //         });
        //     });
        // });
    }

    return (
        <div>
            <Navy vendorsdb={Vendorsdb} />
            <h2><a>Register your business</a></h2>
            <input onChange={event => setVendorName(event.target.value)} class="form-control" type="text" placeholder="enter business name" aria-label="Search"></input>
            <h1>{vendorName}</h1>
            <button onClick={writeFileVendor}>Submit</button>
        </div>
    )
}

export default Vendor;