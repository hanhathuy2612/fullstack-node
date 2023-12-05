const {getConnection} = require("../mysql-connection.cjs");

exports.ProductController = {
  create: (req, res) => {
    const query = "insert into products (name, imageUrl) values (?, ?)";
    getConnection.query(query, [req.name, req.imageUrl], (err, {insertId}, _) => {
      if (err) {
        res.status(400).send({
          message: "Something went wrong"
        });
      } else {
        res.json({
          id: insertId
        });
      }
    });
  },
  list: (req, res) => {
    const query = "select * from products limit 10";
    getConnection.query(query, (err, result, _) => {
      if (err) {
        console.error("Get Products Error: ", err.message);
        res.status(400).send({
          message: "Something went wrong"
        });
      } else {
        res.json(result);
      }
    });
  }
}
