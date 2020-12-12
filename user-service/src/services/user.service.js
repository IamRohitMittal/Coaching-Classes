import { UserRepository } from "~/src/repositories";
import db from "~/src/models";
import redis from "~/util/redis";
import { CustomError } from "~/util/customError";
import config from "~/config/config";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import moment from "moment";
import * as constants from "~/util/constant";

export class UserService {

  //#region 
  static getSubjectsByTeacherId = async ({teacherId}) => {
    const data = await UserRepository.getSubjectsByTeacherId({teacherId});
    return data;
  };

  static createSubjectsByTeacherId = async ({subjectName,teacherId}) => {
    const data = await UserRepository.createSubjectsByTeacherId({subjectName,teacherId});
    return data;
  };

  static updateSubjectsBySubjectId = async ({subjectName,subjectId,teacherId}) => {
    const data = await UserRepository.updateSubjectsBySubjectId({subjectName,subjectId,teacherId});
    return data;
  };

  static deleteSubjectsBySubjectId = async ({subjectId}) => {
    const data = await UserRepository.deleteSubjectsBySubjectId({subjectId});
    return data;
  };

  static login = async (email, password, roleId) => {
    let data = await UserRepository.getLoginInfo(email, roleId);
    let finalResponse = {};
    
    //Creat jwt token
    if (data) {
      const isMatch = await bcrypt.compare(password, data.password);
      if (isMatch) {
        let tokenDetails = {
          userInfo: data.dataValues
        };
        tokenObject = await generateToken(tokenDetails, constants.SESSION_TIME);
        console.log(tokenObject);
        finalResponse.response="Logged In Successfully";
        finalResponse.user=data;      
        delete finalResponse.user.password;
      } 
    } else {
      throw new CustomError(403, {}, "The username and/or password entered is incorrect");
    }
    return finalResponse;
  };

  static getattendance = async (studentId,subjectId) => {
    const data = await UserRepository.getattendance(studentId,subjectId );
    return data;
  };

  static enrollForSubject = async (studentId,subjectId) => {
    const attendanceStatus=await UserService.getattendance(studentId,subjectId);
    if(attendanceStatus){
      throw new CustomError(403, {}, "You have already enrolled for this subject");
    }
    const data = await UserRepository.enrollForSubject(studentId,subjectId );
    return data;
  };

  static updateAttendance = async ({studentId,subjectId,attendance}) => {
    const attendanceStatus=await UserService.getattendance(studentId,subjectId);
    if(!attendanceStatus){
      throw new CustomError(403, {}, "Student have not enrolled for this subject");
    }
    const data = await UserRepository.updateAttendance({studentId,subjectId,attendance});
    return data;
  };
  //#endregion

} // end of UserService Class

async function generateToken(tokenDetails, expiryTime) {
  let accessToken = jwt.sign(tokenDetails, process.env.JWT_ENCRYPTION_KEY, {
    expiresIn: expiryTime,
  });

  
  let refreshToken = jwt.sign(tokenDetails, process.env.JWT_ENCRYPTION_KEY);
  console.log(tokenDetails, expiryTime,accessToken);
  let tokenObject = { accessToken, refreshToken, refreshToken };
  // try {
  //   let session = await redis.saveToken(
  //     tokenDetails.userInfo.email,
  //     JSON.stringify(tokenObject)
  //   );
  //   if (session) {
  //     return tokenObject;
  //   } else {
  //     throw new CustomError(500, {}, "Error while generating token");
  //   }
  // } catch (error) {
  //   throw new CustomError(500, {}, "Error while generating token");
  // }
}



