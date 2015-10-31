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
    },
    google_placeid: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        Place.belongsTo(models.List)
      }
    }
  });
  return Place;
};
