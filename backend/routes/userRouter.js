const express = require("express");
const router = express.Router();
var mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "119.236.61.138",
  user: "admindb",
  password: "Pa$$w0rd",
  database: "nodejs",
});

router.get("/", async (req, res) => {
    let conn;
    try {
      conn = await pool.getConnection();
      const result = await conn.query("select userID from users;");
      console.log(result);
      res.status(200).send(result);
    } catch (err) {
      throw err;
    }
});

  
router.get("/:id/:pw",async (req, res) => {
    let conn;
    try {
      sql =
        "select count(1) from users where userID=\"";
      conn = await pool.getConnection();
      sql = sql + req.params.id + "\" and password=\"" + req.params.pw+"\"";
      const result = await conn.query(sql);
      var out = JSON.stringify(result[0])[12]
      console.log(result);
      res.status(200).json({ a:out });
    } catch (err) {
      throw err;
    } finally {
      if (conn) {
        //conn.end();
        conn.release();
      }
    }
});

router.get("/reg") , async (req,res) => {
    let conn;
    console.log("this is reg");
    try {
      sql = "select count(1) from users where userID=\"";
      sql = sql + req.params.id + "\"";
      const result = await conn.query(sql);
      var out = JSON.stringify(result[0])[12]
      console.log(out);
      if (out == "0") {
        const rs = await conn.query("INSERT INTO users VALUE (?,?,?)",[req.params.id,req.params.password,"not verified"]);
        console.log(rs);
      }
      console.log(result);  
      res.status(200).send(result+"hehe");
    } catch (err) {
      throw err;
    }finally {
      if (conn) {
        conn.release();
      }
    }
}
module.exports = router;