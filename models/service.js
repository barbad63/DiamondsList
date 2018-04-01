module.exports = function(sequelize, DataTypes) {
  var Service = sequelize.define("Service", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKay: true
    },
    businessName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: { args: 1,
              msg: "Must have a Business Name"}
    }
    businessService: {
      type: DataTypes.TEXT
      allowNull: false,
      len: [1]
    },
    {
      classMethods: {
        associate: function(models) {
          Service.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
          Service.belongsTo(models.Category);
        }
      }
    }
  });
  return Service;
};
