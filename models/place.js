module.exports = function(sequelize, DataTypes) {
  var Place = sequelize.define("Place", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    comment: {
      type: DataTypes.STRING
    }
  });
  return Place;
};
