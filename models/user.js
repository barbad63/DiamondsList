module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    fullName: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
    },
    phoneNumber: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        not: ['[a-z]', 'i']
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    zipcode: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  });
    
  User.associate = function(models) {
    User.hasMany(models.Service, {
      onDelete: "cascade"
    });
  };
  
return User;

};
  