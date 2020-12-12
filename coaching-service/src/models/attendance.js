

const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Attendance.init({
    attendanceId:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    studentId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subjectId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attendance:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Attendance',
    freezeTableName: true,
    tableName: 'attendance',
    timestamps: false
  });
  return Attendance;
};