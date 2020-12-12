import model from "~/src/models";
import db from "~/src/models";
import { Op } from "sequelize";
import * as constants from "~/util/constant";
import moment from "moment";

export class UserRepository {
  
  //#region : Subjects
  static getSubjectsByTeacherId({teacherId}) {
    return model.Subject.findAll({
      where:{
        teacherId
      }
    });
  }

  static createSubjectsByTeacherId({subjectName,teacherId}) {
    return model.Subject.create({
      subjectName,teacherId
    });
  }

  static updateSubjectsBySubjectId({subjectName,subjectId,teacherId}) {
    return model.Subject.update({
      subjectName,teacherId
    },{
      where:{
        subjectId
      }
    });
  }

  static deleteSubjectsBySubjectId({subjectId}) {
    return model.Subject.destroy({
      where:{
        subjectId
      }
    });
  }

  static getLoginInfo(email, roleId) {
    return model.Users.findOne({
      where: {
        email, roleId
      },
      plain: true,
    });
  }

  static getattendance(studentId,subjectId) {
    return model.Attendance.findOne({
      where: {
        studentId,subjectId
      },
      plain: true,
    });
  }

  static enrollForSubject(studentId,subjectId) {
    return model.Attendance.create({
      studentId,subjectId, attendance:0
    });
  }

  static updateAttendance({studentId,subjectId,attendance}) {
    console.log({studentId,subjectId,attendance});
    return model.Attendance.update({
      attendance
    },{
      where:{
        studentId,subjectId
      }
    });
  }

  //#endregion
  
}
