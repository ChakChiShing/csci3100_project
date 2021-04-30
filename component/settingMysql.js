const mariadb = require("mariadb");
const { exit } = require("process");

const pool = mariadb.createPool({
	host: '119.236.61.138',
	user: 'admindb',
	password: 'Pa$$w0rd',
	database: 'nodejs'
})

async function getBudget(){
    try{
        let con = await pool.getConnection();
    var sql = "SELECT budget FROM Balance WHERE user_id = \"" + global.ac_name + "\" ";
    let res =  await con.query(sql);
    return res;
    }catch (err){
        throw err;
    }
    
} 

async function setBudget(value){
    try{
        let con = await pool.getConnection();
    var sql = "UPDATE Balance SET budget = " + value + "WHERE user_id = \"" + global.ac_name + "\" ";
    await con.query(sql);
    }catch (err) {
        throw err;
      }
    
}

async function getCurrency(){
    try{
        let con = await pool.getConnection();
        var sql = "SELECT currency FROM Balance WHERE user_id = \"" + global.ac_name + "\" ";
        let res =  await con.query(sql);
        return res;
    }catch (err) {
        throw err;
      }
} 

async function setBudget(choice){
    try{
        let con = await pool.getConnection();
        var sql = "UPDATE Balance SET budget = " + choice + "WHERE user_id = \"" + global.ac_name + "\" ";
        await con.query(sql);
    }catch (err) {
        throw err;
      }
    
}

async function expense(){
    try{
      let conn = await pool.getConnection();
      var sql = "SELECT * FROM expense;";
      let res = await conn.query(sql);
      console.log(res);
      // return res;
    } catch(err){
      throw err;
    }
  
  }
  
  async function income() {
    try{
      let conn = await pool.getConnection();
      var sql = "SELECT * FROM income;";
      let res = await conn.query(sql);
      console.log(res);
      // return res;
    } catch(err){
      throw err;
    }
  }
  
  async function getExpenID(){
    try{
      let conn = await pool.getConnection();
      var sql = "SELECT MAX(expen_id) FROM expense;";
      let res = await conn.query(sql);
      console.log(res);
      // return res;
    } catch(err){
      throw err;
    }
  }
  
  async function insertExpen(id, type, amount, date){
    try{
      let conn = await pool.getConnection();
      var sql = "INSERT INTO expense (expen_id, type, amount, date) VALUES ( " + id + ", '" + type + "', " + amount + ", '" + date +"');";
      await conn.query(sql);
    }catch(err){
      throw err;
    }
  }
  
  async function getIncoID(){
    try{
      let conn = await pool.getConnection();
      var sql = " SELECT MAX(inco_id) FROM income;";
      let res = await conn.query(sql);
      console.log(res);
      return res;
    } catch(err){
      throw err;
    }
  }
  
  async function insertInco(id, type, amount, date){
    try{
      let conn = await pool.getConnection();
      var sql = "INSERT INTO income(inco_id, type, amount, date) VALUES ( " + id + ", '" + type + "', " + amount + ", '" + date + "');";
      await conn.query(sql);
    }catch(err){
      throw err;
    }
  }
  
  async function sumExpen(){
    try{
      let conn = await pool.getConnection();
      var sql = "SELECT SUM(amount) from expense;";
      let res = await conn.query(sql);
      console.log(res);
      //return res;
    } catch(err){
      throw err;
    }
  }
  
  async function sumInco(){
    try{
      let conn = await pool.getConnection();
      var sql = "SELECT SUM(amount) from income;";
      let res = await conn.query(sql);
      console.log(res);
      // return res;
    } catch(err){
    throw err;
    }
  }
