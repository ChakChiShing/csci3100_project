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
    var sql = "SELECT budget FROM balance_account b WHERE b.user_id = " + global.user_id;
    let res =  await con.query(sql);
    return res;
    }catch (err){
        throw err;
    }
    
} 

async function setBudget(value){
    try{
        let con = await pool.getConnection();
    var sql = "UPDATE balance SET budget = " + value + "WHERE user_id = " + global.user_id;
    return await con.query(sql);
    }catch (err) {
        throw err;
      }
    
}

async function getCurrency_type(){
    try{
        let con = await pool.getConnection();
        var sql = "SELECT currency_type FROM balance b WHERE b.user_id = " + global.user_id;
        let res =  await con.query(sql);
        return return res;
    }catch (err) {
        throw err;
      }
} 

async function setCurrency_type(choice){
    try{
        let con = await pool.getConnection();
        var sql = "UPDATE balance SET currency_type = \"" + global.currency_type + "\" WHERE user_id = " + global.user_id;
        return await con.query(sql);
    }catch (err) {
        throw err;
      }
    
}

async function showAllfriend(choice){
    try{
        let con = await pool.getConnection();
        var sql = "SELECT friend_id FROM friend f WHERE f.user_id = " + global.user_id + " AND status = 3";
        return await con.query(sql);
    }catch (err) {
        throw err;
      }
    
}

async function showAllpendingfriend(choice){
    try{
        let con = await pool.getConnection();
        var sql = "SELECT friend_id FROM friend f WHERE f.user_id = " + global.user_id + " AND status = 1";
        return await con.query(sql);
    }catch (err) {
        throw err;
      }
    
}

async function addfriendrequest(choice){
    try{
        let con = await pool.getConnection();
        var sql = "UPDATE friend SET status = 1 WHERE user_id = " + global.user_id + " And friend_id = " + global.friend_id;
        return await con.query(sql);
    }catch (err) {
        throw err;
      }
    
}

async function acceptfriend(choice){
    try{
        let con = await pool.getConnection();
        var sql = "UPDATE friend SET status = 3 WHERE user_id = " + global.user_id + " And friend_id = " + global.friend_id;
        return await con.query(sql);
    }catch (err) {
        throw err;
      }
    
}

async function showexpense(choice){
    try{
        let con = await pool.getConnection();
        var sql = "SELECT e.type, e.amount, e.date FROM expense e, map_to_expense m WHERE m.user_id = " + global.user_id + " AND m.expen_id = e.expen_id";
        return await con.query(sql);
    }catch (err) {
        throw err;
      }
    
}

async function showincome(choice){
    try{
        let con = await pool.getConnection();
        var sql = "SELECT i.type, i.amount, i.date FROM income i, map_to_income m WHERE m.user_id = " + global.user_id + " AND m.inco_id = i.inco_id";
        return await con.query(sql);
    }catch (err) {
        throw err;
      }
    
}

async function getfishquantity(choice){
    try{
        let con = await pool.getConnection();
        var sql = "SELECT u.fish_quantity FROM user u WHERE u.user_id = " + global.user_id;
        return await con.query(sql);
    }catch (err) {
        throw err;
      }
    
}

async function getlikenum(choice){
    try{
        let con = await pool.getConnection();
        var sql = "SELECT u.no_of_like FROM user u WHERE u.user_id = " + global.user_id;
        return await con.query(sql);
    }catch (err) {
        throw err;
      }
    
}

async function checklockin(choice){
    try{
        let con = await pool.getConnection();
        var sql = "SELECT u.user FROM user u WHERE u.account_name = \"" + global.accountname + "\" AND u.password = \"" + global.password + "\"";
        return await con.query(sql);
    }catch (err) {
        throw err;
      }
    
}