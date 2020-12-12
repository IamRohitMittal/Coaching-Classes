
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Subject.init({
    subjectId:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    subjectName:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    teacherId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue:1
    }
  }, {
    sequelize,
    modelName: 'Subject',
    freezeTableName: true,
    tableName: 'lkp_subjects',
    timestamps: false
  });
  return Subject;
};