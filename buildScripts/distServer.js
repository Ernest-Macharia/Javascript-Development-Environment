import express from "express";
import path from "path";
import open from "open";
import compression from "compression";

const port = 3000;
const app = express();
app.use(compression());
app.use(express.static('dist'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});
app.get('/users', function(req, res){
    //hard coding for simplicity. Just pretends this has hit a real database
    res.json([
        {"id": 1,"firstName":"Bob","lastName":"Marley","email":"bobmarley@gmail.com"},
        {"id": 2,"firstName":"redy","lastName":"Marlit","email":"bobmarlit@gmail.com"},
        {"id": 3,"firstName":"cloe","lastName":"Marlen","email":"chloemarlen@gmail.com"}
    ]);
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    } else{
        open("http://localhost:" + port);
    }
});