var db = require("../dbconnection");

var Products = {
  getAllProductsWithCategory: function(callback) {
    return db.query(
      "Select p.*,c.* from product_tbl p,cat_tbl c where p.fk_cat_id=c.cat_id",
      callback
    );
  },
  getProductById: function(id, callback) {
    return db.query(
      "Select p.*,c.* from product_tbl p,cat_tbl c where p.fk_cat_id=c.cat_id and pro_id=?",
      [id],
      callback
    );
  },
  insertProducts: function(product, callback) {
      console.log(product);
    return db.query(
      "Insert into product_tbl values(?,?,?,?,?)",
      [product.pro_id,product.pro_name, product.pro_price, product.pro_soh, product.fk_cat_id],
      callback
    );
  },
  updateProduct: function(id, product, callback) {
    return db.query(
      "update product_tbl set pro_name=?,pro_price=?,pro_soh=?,fk_cat_id=? where pro_id=?",
      [
        product.pro_name,
        product.pro_price,
        product.pro_soh,
        product.fk_cat_id,
        id
      ],
      callback
    );
  },
  deleteProduct: function(id, callback) {
    return db.query("delete from product_tbl where pro_id in (?)", [id], callback);
  }
};
module.exports = Products;
