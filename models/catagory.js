module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKay: true
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    {
      classMethods: {
        associate: function(models) {
          Favorite.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
  });
  return Service;
};
