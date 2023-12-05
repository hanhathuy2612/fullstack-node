const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "FormosVN@123",
  database: "node_db_test",
  port : 3306,
});

exports.mysqlConnection = () => {
  con.connect(function(err) {
    if (err) {
      console.error(err)
      throw err;
    }
    console.log("Connected!");
  });
};

exports.getConnection = con;
