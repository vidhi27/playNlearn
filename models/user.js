module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    country: DataTypes.STRING,
    progress: DataTypes.INTEGER
  });
  return User;
};
