import express from 'express';
import data from './data.js';
import cors from 'cors';
import mysql from "mysql";
import bodyParser from 'body-parser';

const encoder = bodyParser.urlencoded();
const app = express();
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs",
});
connection.connect(function(error) {
    if (error) throw error;
    else console.log("connected to the database successfully!");
});
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('sever is ready');
});

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    connection.query("select * from loginuser where email = ? and user_pass = ?", [email, password], function(error, results, fields) {
        if (results.length > 0) {
            res.status(200).send("Logged in success fully");
        } else {
            res.status(402).send("Invalid password or username");
        }
        res.end();
    })
})
app.post("/register", (req, res) => {
    const { username, mobile, password, email } = req.body;
    connection.query("insert into loginuser(user_name,user_pass,mobile,email)  values ?", [username, password, mobile, email], function(error, results, fields) {
        if (!err) {
            res.status(201).send("Registered successfully");
        } else {
            res.status(501).send("Something went wrong try after sometime");
        }
        res.end();
    })
})
const port = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`server at https://localhost:${port}`);
});