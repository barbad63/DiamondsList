module.exports = function(sequelize, DataTypes) {
    var Creds = sequelize.define("Creds", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        }
    });
    Creds.associate = function(model) {
        Creds.belongsTo(model.User), {
            foreignKey: {
                allowNull: false
            }
        }
    }
    return Creds;
}