module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });
    
  Category.associate =  function(models) {
    Category.hasMany(models.Service);
  };
   
  return Category;
};
