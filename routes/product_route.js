var express = require("express");
var router = express.Router();
var Product = require("../Models/product_model");

router.get("/:id?", function(req, res, next) {
  if (req.params.id) {
    Product.getProductById(req.params.id, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    Product.getAllProductsWithCategory(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post("/:action?", function(req, res, next) {
  
  if(req.params.action == 'delete') { 
    Product.deleteProduct(req.body, function(err, count) {
      if (err) {
        res.json(err);
      } else {
        res.json(count);
      }
    });
  }
  else {
    Product.insertProducts(req.body, function(err, count) {
      if (err) {
        res.json(err);
      } else {
        res.json(count); //or return count for 1 &amp;amp;amp; 0
      }
    });
  }
});

router.put("/:id", function(req, res, next) {
  Product.updateProduct(req.params.id, req.body, function(err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
