/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: undefined,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: undefined
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: undefined
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: undefined
    }
  }, {
    tableName: 'products',
    underscored: true
  });
};
