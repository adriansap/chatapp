var path = require("path");
const fs = require("fs")
let newVendorReceived = require('./newuser.json');

module.exports = function (app) {
    app.post("/api/newuser", function (req, res) {
        console.log("yes can post") //didn't log
        newVendorReceived = JSON.stringify(req.body); //get new note into newNoteReceived
        console.log("req.body is :" + JSON.stringify(req.body)); //logs!
        // res.send("received, thanks")
        // notedatabase.push(req.body);
        // console.log(notedatabase)
        res.json(true)
        // notedatabaseString = JSON.stringify(notedatabase)
        fs.writeFile(path.join(__dirname, "./newuser.json"), newVendorReceived, function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("Success!");

        });



    });

    app.get("/api/newuser", function (req, res) {
        // var parsedData = Object.create(null)


        // res.json(JSON.parse(data))
        console.log("yep can get");
        res.json(true)
    });

}