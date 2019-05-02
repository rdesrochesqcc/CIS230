var express = require("express"),
    http = require("http"),
    mongoose = require( "mongoose"),
    app = express();

app.use(express.static(__dirname + "/client"));
// Parse incoming JSON
app.use( express.urlencoded() );

// connect to mongo
mongoose.connect('mongodb://localhost/amzeriffic');

var ToDoSchema = mongoose.Schema({
    description: String,
    tags: [ String ]
});

var ToDo = mongoose.model("ToDo", ToDoSchema); 

http.createServer(app).listen(3000);

app.get("/todos", function (req, res) {
    ToDo.find({}, function( err, toDos ) {
        // res.json returns the entire object as a JSON file
         console.log("ToDo's Length GET = " + toDos.length );
        res.json(toDos);
    });
});

app.post("/todos", function (req, res) {
    var newToDo = new ToDo({"description": req.body.description,
                            "tags": req.body.tags });
    newToDo.save( function( err, result ) {

        if ( err != null ) {
            console.log(err);
            res.send("ERROR");
        }
        else {
            ToDo.find({}, function( err, result) {
                if ( err !=  null ) {
                    res.send("ERROR");
                }
                res.json(result);
            });
        }
    });
});

console.log("Magic happens on port 3000");
