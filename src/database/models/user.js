'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

      User.hasMany(models.Rol, {
        as: "rols",
        foreignKey: "rolId"
      })

      User.hasMany(models.Address, {
        as: "Addresses",
        foreignKey: "userId"
      })

      // define association here
    }
  }

  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    rolId: DataTypes.INTEGER
  },
    {
      sequelize,
      modelName: 'User',
    });

  return User;

};