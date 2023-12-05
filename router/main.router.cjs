const express = require("express");
const {ProductController} = require("../controllers/product.controller.cjs");
const router = express.Router();

router.get('/', (request, response) => {
  response.render("index");
});

router.get('/login', (request, response) => {
  response.render('login');
});

router.get('/user/:id', (request, response) => {
  response.render('user/details', {
    title: "User Details",
    userId: request.params.id
  });
});

router.get("/api/products", [
  ProductController.list
]);

router.post("/api/products", [ProductController.create])

module.exports = router;
