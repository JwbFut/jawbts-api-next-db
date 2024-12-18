'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jwks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jwks.init({
    n: {
      type: DataTypes.STRING(683),
      allowNull: false
    },
    pri_key: {
      type: DataTypes.STRING(3322),
      allowNull: false
    },
    cre_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    kid: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
  }, {
    sequelize,
    modelName: 'jwks',
  });
  return jwks;
};