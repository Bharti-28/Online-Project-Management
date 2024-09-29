import express from "express";
import mysql from 'mysql';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import con from "../utils/db.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/userlogin", (req, res) => {
  const sql = "SELECT * from user Where email = ? and password = ?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Query error" });
    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        {
          role: "user",
          email: email,
        },
        "jwt_secret_key",
        {
          expiresIn: "1d",
        }
      );
    //   res.cookie('token', token);
      return res.json({ loginStatus: true });
    } else {
        return res.json({ loginStatus: false, Error: "Invalid credentials" });
    }
  });
});

router.post('/project_created', (req, res) => {
  const sql = `INSERT INTO createproject 
  (projecttheme, reason, type, division, category, priority, startdate, enddate, location) 
   VALUES (?)`;

  //  if(err) return res.json({Satus: false, Error: "Query Error"})
   const values = [
   req.body.projecttheme,
   req.body.reason,
   req.body.type,
   req.body.division,
   req.body.category,
   req.body.priority,
   req.body.startdate,
   req.body.enddate,
   req.body.location
   ]

   con.query(sql, [values], (err, result) => {
    if(err) return res.json({Status: false, Error: "Query Error"})
      return res.json({Status: true})
   })

})

export { router as userRouter }
