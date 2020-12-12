import { UserService } from '~/src/services';
import { CustomError } from '~/util/customError';
import * as responseHandler from '~/util/responseHandler';
import { sendRequest } from "~/util/util";

export class UserCtrl {
    //#region 
    static getSubjectsByTeacherId = async (req,res,next)=>{
        try {
            const {teacherId}=req.query;
            const data = await UserService.getSubjectsByTeacherId({teacherId});
            return responseHandler.success(res, data, "Subjects retrieved successfully", 200);
        } catch (error) {
            if (error.sql) {
                return responseHandler.sqlError(error, next);
            } else if (error.statusCode) {
                return next(error);
            }
            next(new CustomError(500, {}, res.__("Internal Server Error")));
            throw (error);
        }
    }

    static createSubjectsByTeacherId = async (req,res,next)=>{
        try {
            const {teacherId}=req.query;
            const {subjectName}=req.body;
            const data = await UserService.createSubjectsByTeacherId({subjectName,teacherId});
            return responseHandler.success(res, data, "Subjects created successfully", 200);
        } catch (error) {
            if (error.sql) {
                return responseHandler.sqlError(error, next);
            } else if (error.statusCode) {
                return next(error);
            }
            next(new CustomError(500, {}, res.__("Internal Server Error")));
            throw (error);
        }
    }

    static updateSubjectsBySubjectId = async (req,res,next)=>{
        try {
            const {subjectId}=req.params;
            const {subjectName, teacherId}=req.body;
            const data = await UserService.updateSubjectsBySubjectId({subjectName,subjectId,teacherId});
            return responseHandler.success(res, data, "Subjects updated successfully", 200);
        } catch (error) {
            if (error.sql) {
                return responseHandler.sqlError(error, next);
            } else if (error.statusCode) {
                return next(error);
            }
            next(new CustomError(500, {}, res.__("Internal Server Error")));
            throw (error);
        }
    }

    static deleteSubjectsBySubjectId = async (req,res,next)=>{
        try {
            const {subjectId}=req.params;
            const data = await UserService.deleteSubjectsBySubjectId({subjectId});
            return responseHandler.success(res, data, "Subjects deleted successfully", 200);
        } catch (error) {
            if (error.sql) {
                return responseHandler.sqlError(error, next);
            } else if (error.statusCode) {
                return next(error);
            }
            next(new CustomError(500, {}, res.__("Internal Server Error")));
            throw (error);
        }
    }

    static createUserInfo = async (req, res, next) => {
        try {
            let user = req.body;
            const data = await UserService.createUserInfo(user);
            if(user.roleId==1)
                return responseHandler.success(res, data, "Teacher created successfully", 200);
            else
                return responseHandler.success(res, data, "Student created successfully", 200);
        } catch (error) {
            if (error.sql) {
                return responseHandler.sqlError(error, next);
            } else if (error.statusCode) {
                return next(error);
            }
            next(new CustomError(500, {}, res.__("Internal Server Error")));
            throw (error);
        }
    }

    static login = async (req, res, next) => {
        try {
            let { email, password, roleId } = req.body;
            const data = await UserService.login(email, password, roleId);
            return responseHandler.success(res, data, "User login successfully", 200);
        } catch (error) {
            if (error.sql) {
                return responseHandler.sqlError(error, next);
            } else if (error.statusCode) {
                return next(error);
            }
            next(new CustomError(500, {}, res.__("Internal Server Error")));
            throw (error);
        }
    }


    static getattendance = async (req, res, next) => {
        try {
            let { studentId,subjectId } = req.query;
            const data = await UserService.getattendance(studentId,subjectId);
            return responseHandler.success(res, data, "Attendance retrieved successfully", 200);
        } catch (error) {
            if (error.sql) {
                return responseHandler.sqlError(error, next);
            } else if (error.statusCode) {
                return next(error);
            }
            next(new CustomError(500, {}, res.__("Internal Server Error")));
            throw (error);
        }
    }

    static enrollForSubject = async (req, res, next) => {
        try {
            let { studentId,subjectId } = req.body;
            const data = await UserService.enrollForSubject(studentId,subjectId);
            return responseHandler.success(res, data, "Student Enrolled successfully", 200);
        } catch (error) {
            if (error.sql) {
                return responseHandler.sqlError(error, next);
            } else if (error.statusCode) {
                return next(error);
            }
            next(new CustomError(500, {}, res.__("Internal Server Error")));
            throw (error);
        }
    }
    
    static updateAttendance = async (req, res, next) => {
        try {
            const { studentId,subjectId } = req.query;
            const {attendance} = req.body; 
            const data = await UserService.updateAttendance({studentId,subjectId,attendance});
            return responseHandler.success(res, data, "Student Attendance updated successfully", 200);
        } catch (error) {
            if (error.sql) {
                return responseHandler.sqlError(error, next);
            } else if (error.statusCode) {
                return next(error);
            }
            next(new CustomError(500, {}, res.__("Internal Server Error")));
            throw (error);
        }
    }

    static getUserInfoById = async (req, res, next) => {
        try {
            let loggedInUser = req.headers && req.headers.user && JSON.parse(req.headers.user);
            let userId = loggedInUser && loggedInUser.userId;
            const userInfo = await UserService.getUserInfoById(userId, loggedInUser);
            return responseHandler.success(res, userInfo, "User retrieved successfully", 200);

        } catch (error) {
            if (error.sql) {
                return responseHandler.sqlError(error, next);
            } else if (error.statusCode) {
                return next(error);
            }
            next(new CustomError(500, {}, res.__("Internal Server Error")));
            throw (error);
        }
    }

    //#endregion
} 