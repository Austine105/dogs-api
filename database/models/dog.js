'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dog = sequelize.define('Dog', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    color: DataTypes.STRING,
    breed: DataTypes.STRING,
    weight: DataTypes.INTEGER,
  }, {
    // options
    timestamps: true,
    tableName: 'dogs'
  });

  Dog.associate = function(models) {
    // associations can be defined here
  };
  return Dog;
};