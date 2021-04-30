const express = require("express");
const router = express.Router();
var mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "119.236.61.138",
  user: "admindb",
  password: "Pa$$w0rd",
  database: "nodejs",
});

// Retrieve all friends
router.get("/", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query("select * from friend where user_id;");
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    throw err;
  }
});

router.get("/test", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    test_sql = "SHOW INDEXES From friend";
    const result = await conn.query(test_sql);
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    throw err;
  }
});

// Create a new friend
router.post("/", async (req, res) => {
  var jsondata = req.body;
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query(
      "INSERT INTO friend SET user_id=?,friend_id=?,status=? WHERE id = ?",
      [jsondata.user_id, jsondata.friend_id, jsondata.status, id]
    );
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.release();
    }
  }
});

router.delete("/deleteFriendrById", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query(
      "DELETE FROM friend WHERE id =" + req.query.id
    );
    console.log(result);
    res.send(result);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      //conn.end();
      conn.release();
    }
  }
});

router.get("/:id", async (req, res) => {
  let conn;
  try {
    sql =
      "select u.account_name, u.no_of_like, u.user, f.friend_id from user u inner join friend f on f.friend_id = u.user where f.user_id=";
    conn = await pool.getConnection();
    const result = await conn.query(sql + req.params.id);
    console.log(result);
    res.status(200).send(result);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      //conn.end();
      conn.release();
    }
  }
});

router.post("/updateCustomerById", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query(
      "UPDATE friend SET user_id=?,friend_id=?,status=? WHERE id = ?",
      [req.body.user_id, req.body.friend_id, req.body.status, req.body.user_id]
    );
    console.log(result);
    res.send(result);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      //conn.end();
      conn.release();
    }
  }
});

module.exports = router;
