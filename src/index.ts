import express from 'express'

let app = express();
let port:number = process.env.PORT || 3000;
app.get("/",(req,res) => res.send("name"))

app.listen(port, (data) => {
    console.log('connected')
});