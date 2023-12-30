import express from "express";
import mysql from "mysql";
import cors from "cors";

//create express app
const app = express();
app.listen(8800, () => {
  console.log("Backend server is runnnning!");
});
app.use(cors());
app.use(express.json());

//create connection to database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "54770766Mm",
  database: "courses",
});

//create routes

//get all courses
app.get("/courses", (req, res) => {
  const q = "SELECT * FROM course";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

//post one course
app.post("/courses", (req, res) => {
  const q = "INSERT INTO course(`title`, `price`, `cover`) VALUES (?)";

  const values = [req.body.title, req.body.price, req.body.cover];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

//delete one course
app.delete("/course/:id", (req, res) => {
  const id = req.params.id;
  const q = " DELETE FROM course WHERE id = ? ";

  db.query(q, [id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

//update one course
app.put("/course/:id", (req, res) => {
  const id = req.params.id;
  const q =
    "UPDATE course SET `title`= ?,  `price`= ?, `cover`= ? WHERE id = ?";

  const values = [req.body.title, req.body.price, req.body.cover];

  db.query(q, [...values, id], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
