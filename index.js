const express = require("express")
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.post("/", (req, res) => {
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    res.send("the sum is " + (n1 + n2));
})
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/calc.html")
})
app.listen(8000, () => console.log("server running"))