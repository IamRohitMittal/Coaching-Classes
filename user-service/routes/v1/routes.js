import Router from 'express';
import { validate, authorize } from '~/util/middleware';
import * as validationInputs from '~/src/validation';
import { UserCtrl  } from '~/src/controllers'

const routerV1 = Router();
// Add API Routs below
// ********ROUTE Block START*********
routerV1.get('/subjects',validate(validationInputs.getSubjectsByTeacherId),UserCtrl.getSubjectsByTeacherId); // Teacher
routerV1.post('/subjects',validate(validationInputs.createSubjectsByTeacherId),UserCtrl.createSubjectsByTeacherId);  // Teacher
routerV1.put('/subjects/:subjectId',validate(validationInputs.updateSubjectsBySubjectId),UserCtrl.updateSubjectsBySubjectId); // Teacher
routerV1.delete('/subjects/:subjectId',validate(validationInputs.deleteSubjectsBySubjectId),UserCtrl.deleteSubjectsBySubjectId); // Teacher
routerV1.post('/user', validate(validationInputs.createUserInfo), UserCtrl.createUserInfo); // Teacher+Student
routerV1.post('/login', validate(validationInputs.login), UserCtrl.login); // Teacher+Student
routerV1.get('/attendance',validate(validationInputs.getattendance),UserCtrl.getattendance); //Student
routerV1.post('/enroll',validate(validationInputs.enrollForSubject),UserCtrl.enrollForSubject); //Student
routerV1.put('/attendance',validate(validationInputs.updateAttendance),UserCtrl.updateAttendance); // Teacher

routerV1.get('/user/:userId', validate(validationInputs.getUserInfoById), UserCtrl.getUserInfoById);

export default routerV1;
