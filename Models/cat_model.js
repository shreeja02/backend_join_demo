var db = require("../dbconnection");

var category = {
  getAllCategories: function(callback) {
    return db.query("Select * from cat_tbl", callback);
  },
  getCategoryById:function(id,callback){
    return db.query("Select * from cat_tbl where cat_id=?", [id],callback);
  },
  insertCategory: function(category, callback) {
    return db.query(
      "Insert into cat_tbl values(?,?)",
      [category.cat_id,category.cat_name],
      callback
    );
  },
  updateCategory: function(id, category, callback) {
    return db.query(
      "update cat_tbl set cat_name=? where cat_id=?",
      [category.cat_name, id],
      callback
    );
  },
  deleteCategory: function(id, callback) {
    return db.query("delete from cat_tbl where cat_id=?", [id], callback);
  }
};
module.exports = category;
