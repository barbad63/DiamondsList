module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    // Giving the Author model a name of type STRING
    id: DataTypes.INT
  });
Users.associate = function(models) {

    Users.hasMany(models.Services, {
    	onDelete: "cascade"
    });
  };

  return Users;
};
