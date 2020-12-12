import Joi from 'joi';
let tokenRegex = new RegExp("^Bearer\s*")
let pwdRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
export const getRolesByPortal = {
    query: Joi.object({
        portalTypeId: Joi.number().required(),
        portalProfileId: Joi.number().required()
    })
}

export const addRole = {
    body: Joi.object({
        roleName: Joi.string().required(),
        permission: Joi.array().items(Joi.number()).required(),
        description: Joi.string().required()
    }),
    query: Joi.object({
        portalTypeId: Joi.number().required(),
        portalProfileId: Joi.number().required()
    })
}

export const editRole = {
    body: Joi.object({
        roleName: Joi.string().required(),
        permission: Joi.array().items(Joi.number()).required(),
        description: Joi.string().required()
    }),
    query: Joi.object({
        roleId: Joi.number().required(),
        portalProfileId: Joi.number().required()
    })
}

export const setUserLock = {
    body: Joi.object({
        userId: Joi.array().items(Joi.number()).required(),
        isLocked: Joi.boolean().required(),
    })
}

export const getSerachedUsers = {
    query: Joi.object({
        portalTypeId: Joi.number().required(),
        portalProfileId: Joi.number().required()
    }),
    body: Joi.object({
        displayName: Joi.string().allow(''),
        email: Joi.string().allow(''),
        phone: Joi.number().allow(''),
        roleId: Joi.number().allow(null),
        pageNo: Joi.number().required(),
        pageSize: Joi.number().required(),
        sortColumn: Joi.string().allow(''),
        sortOrder: Joi.string().allow(''),
        isLocked: Joi.boolean().allow(null),
        isNewUsers: Joi.boolean(),
        isActiveUsers: Joi.boolean()
    })
}
export const createUserDfa = {
    body: Joi.object({
        dfaType: Joi.string().required().valid('PHONE', 'EMAIL', 'SMS'),
        dfaEmail: Joi.any().when('dfaType', {
            is: 'EMAIL',
            then: Joi.string().required()
        }),
        dfaPhone: Joi.any().when('dfaType', {
            is: 'PHONE',
            then: Joi.string().required()
        }),
        dfaPhoneExt: Joi.any().when('dfaType', {
            is: 'PHONE',
            then: Joi.string().allow(null, '')
        }),
        dfaPhoneCountryCode: Joi.any().when('dfaType', {
            is: 'PHONE',
            then: Joi.string().required()
        }),
        dfaMobile: Joi.any().when('dfaType', {
            is: 'SMS',
            then: Joi.string().required()
        }),
        dfaMobileCountryCode: Joi.any().when('dfaType', {
            is: 'SMS',
            then: Joi.string().required()
        }),
    })
}

export const verifyDfaOtp = {
    body: Joi.object({
        code: Joi.string().required()
    })
}

export const updateUserInfo = {
    query: Joi.object({
        portalTypeId: Joi.number().required(),
        portalProfileId: Joi.number().required()
    }),
    body: Joi.object({
        userId: Joi.number().required(),
        title: Joi.string().optional(),
        firstName: Joi.string().max(50).required(),
        lastName: Joi.string().max(50).required(),
        isSSO: Joi.boolean().required(),
        userName: Joi.any().when('isSSO', {
            is: false,
            then: Joi.string().when(
                Joi.string().email(),
                {
                    then: Joi.forbidden().error(new Error('username must not be an email')),
                    otherwise: Joi.string().required().allow(null)
                }
            )
        }),
        password: Joi.string().min(8).regex(pwdRegex).allow('', null),
        email: Joi.string().email(),
        phone: Joi.string(),
        roleId: Joi.array().required().allow(null),
        SSOUserId: Joi.string().max(20).alphanum().allow(null),
        isFirstUser: Joi.boolean(),
        phoneCountryCode: Joi.string(),
        phoneExt: Joi.string().allow('', null),
    })
}

export const deleteUserInfo = {
    body: Joi.object({
        userId: Joi.array().items(Joi.number()).required()
    })
}

export const getUserInfo = {
    query: Joi.object({
        portalTypeId: Joi.number().required(),
        portalProfileId: Joi.number().required()
    })
}

export const getPermission = {
    query: Joi.object({
        portalProfileId: Joi.number().required(),
        roleId: Joi.number().required()
    })
}

export const getAccessRights = {
    query: Joi.object({
        portalTypeId: Joi.number().required()
    })
}

export const editAccessRights = {
    body: Joi.object({
        arrAccessRightMappingIds: Joi.array().items(Joi.number()).required()
    }),
    query: Joi.object({
        roleId: Joi.number().required(),
        portalProfileId: Joi.number().required()
    })
}

export const getBankUserAccesses = {
    query: Joi.object({
        bankId: Joi.number().required(),
        userId: Joi.number().required()
    })
}


export const editBankUserAccesses = {
    query: Joi.object({
        bankId: Joi.number().required(),
        userId: Joi.number().required()
    }),
    body: Joi.object({
        clientIds: Joi.array().items(Joi.object({
            clientId: Joi.number().required(),
            clientName: Joi.string().required()
        })).required()
    })
}

export const editBankUserClientAccessesRights = {
    query: Joi.object({
        bankId: Joi.number().required(),
        userId: Joi.number().required(),
        clientId: Joi.number().required()
    }),
    body: Joi.object({
        accessRightMappingIds: Joi.array().items(Joi.number()).required()
    }),
}

export const getBankUserClientAccessesRights = {
    query: Joi.object({
        bankId: Joi.number().required(),
        userId: Joi.number().required(),
        clientId: Joi.number().required()
    })
}

export const getAllBankAccesses = {
    query: Joi.object({
        bankId: Joi.number().required()
    })
}

export const getBankAccessesForUserId = {
    query: Joi.object({
        bankId: Joi.number().required(),
        userId: Joi.number().required(),
        clientId: Joi.number().required()
    })
}

export const saveBankUserAccesses = {
    body: Joi.object({
        bankId: Joi.number().required(),
        userId: Joi.number().required(),
        clients: Joi.array().items(Joi.object({
            clientId: Joi.number().required(),
            clientName: Joi.string().required()
        })).required()
    })
}

export const saveClientsPermissions = {
    body: Joi.object({
        clientId: Joi.number().required(),
        permissionIds: Joi.array().items(Joi.number()).required()
    })
}

export const clientsParentPermissions = {
    query: Joi.object({
        clientId: Joi.number().optional(),
        parentId: Joi.number().optional()
    }),
    params: Joi.object({
        portalTypeId: Joi.number().required(),
    })
}

export const updateFirstTimeLoginInfo = {
    body: Joi.object({
        userName: Joi.string().required(),
        password: Joi.string().min(8).regex(pwdRegex).required(),
        securityQuestionId: Joi.number().required(),
        securityAnswer: Joi.string().min(6).required()
    })
}

export const addPortalDefaultRoles = {
    query: Joi.object({
        portalTypeId: Joi.number().required(),
        portalProfileId: Joi.number().required()
    }),
    body: Joi.object({
        title: Joi.string().optional(),
        firstName: Joi.string().max(50).required(),
        lastName: Joi.string().max(50).required(),
        isSSO: Joi.boolean().required(),
        userName: Joi.any().when('isSSO', {
            is: false,
            then: Joi.string().when(
                Joi.string().email(),
                {
                    then: Joi.forbidden().error(new Error('username must not be an email')),
                    otherwise: Joi.string().required().allow(null)
                }
            )
        }),
        password: Joi.any().when('isSSO', {
            is: false,
            then: Joi.string().min(8).regex(pwdRegex).required().allow(null, '')
        }),
        SSOUserId: Joi.any().when('isSSO', {
            is: true,
            then: Joi.string().max(20).alphanum().required().allow(null)
        }),
        email: Joi.string().email().required(),
        phone: Joi.string(),
        isFirstUser: Joi.boolean().required(),
        phoneCountryCode: Joi.string(),
        phoneExt: Joi.string().allow('', null),
    })
}

export const getResetPasswordLink = {
    query: Joi.object({
        login: Joi.string().required()
    })
}
/*The Password must contain at least 1 lowercase alphabetical character
The Password must contain at least 1 uppercase alphabetical character
The Password must contain at least 1 numeric character
The Password must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
The Password must be eight characters or longer
*/
export const editPassword = {
    query: Joi.object({
        passwordResetCode: Joi.string().required()
    }),
    body: Joi.object({
        updatedPassword: Joi.string().required().min(8).regex(pwdRegex),
        updatedSecurityQuestionId: Joi.number().required(),
        updatedSecurityAnswer: Joi.string().min(6).required()
    })
}



export const logout = {
    headers: Joi.object({
        authorization: Joi.string().regex(tokenRegex).required()
    }).options({ allowUnknown: true })
}

export const ssoLogin = {
    headers: Joi.object({
        authorization: Joi.string().regex(tokenRegex).required()
    }).options({ allowUnknown: true })
}


export const getAccessRightsByUserId = {
    param: Joi.object({
        userId: Joi.number().required()
    }),
}

export const generateToken = {
    headers: Joi.object({
        refreshtoken: Joi.string().required()
    }).options({ allowUnknown: true })
}

export const getUserProfile = {
    params: Joi.object({
        userId: Joi.number().required()
    })
}

export const updateUserProfile = {
    body: Joi.object({
        userId: Joi.number().required(),
        title: Joi.string().optional(),
        firstName: Joi.string().max(50).required(),
        lastName: Joi.string().max(50).required(),
        isSSO: Joi.number().integer().min(0).max(1),
        userName: Joi.any().when('isSSO', {
            is: 0,
            then: Joi.string().when(
                Joi.string().email(),
                {
                    then: Joi.forbidden().error(new Error('username must not be an email')),
                    otherwise: Joi.string().required().allow(null)
                }
            )
        }).required().allow(null),
        email: Joi.string().email(),
        phone: Joi.string(),
        SSOUserId: Joi.string().max(20).alphanum().allow(null),
        phoneCountryCode: Joi.string(),
        phoneExt: Joi.string().allow('', null),
        securityQuestionId: Joi.number().required(),
        securityAnswer: Joi.string().min(6).required(),
    })
}

export const updatePayeeUserStatus = {
    query: Joi.object({
        isActivePayee: Joi.boolean().required(),
        portalProfileId: Joi.number().required(),
        portalTypeId: Joi.number().required()
    })
}
export const getChildPortalAccess = {
    query: Joi.object({
        childPortalProfileId: Joi.number().integer().required(),
        parentPortalProfileId: Joi.number().optional(),
        userId: Joi.number().optional()
    })
}
export const getUsersByIds = {
    body: Joi.object({
        userIds: Joi.array().required()
    })
}


export const getBackToParentPortal = {
    params: Joi.object({
        parentPortalProfileId: Joi.number().optional()
    }),
    query: Joi.object({
        userId: Joi.number().optional()
    })
}

export const getIdentityApiResult = {
    query: Joi.object({
        url: Joi.string(),
        method: Joi.string()
    })
}

export const getClientPortalAccess = {
    query: Joi.object({
        clientId: Joi.number().required()
    })
}

export const getBackToBankPortal = {
    query: Joi.object({
        bankId: Joi.number().required()
    })
}

export const getAccessmappingIdByRoleId = {
    body: Joi.object({
        roleId: Joi.array().required()
    })
}

export const updateCrmUserId = {
    body: Joi.object({
        userId: Joi.string(),
        crmUserId: Joi.string()
    })
}
export const getFirstUserByProfileId = {
    query: Joi.object({
        portalTypeId: Joi.number().required()
    }),
    body: Joi.object({
        payeeId: Joi.array().required(),
    })
}

export const getAllUsersByProfileId = {
    query: Joi.object({
        portalTypeId: Joi.number().required(),
        portalProfileId: Joi.number().required(),
        accessRightMappingId: Joi.number().optional()
    }),
}

export const getSystemAdminUsersByProfileId = {
    query: Joi.object({
        portalTypeId: Joi.number().required(),
        portalProfileId: Joi.number().required()
    }),
}

export const getOperationsUsersByuserId = {
    query: Joi.object({
        portalTypeId: Joi.number().required(),
        userId: Joi.number().required()
    }),
}

export const updateUserProfilePassword = {
    body: Joi.object({
        oldPassword: Joi.string().min(8).regex(pwdRegex).optional().allow(null),
        password: Joi.string().min(8).regex(pwdRegex).allow(null),
    })
}

export const getSubjectsByTeacherId = {
    query: Joi.object({
        teacherId: Joi.number().required()
    })
}

export const createSubjectsByTeacherId = {
    query: Joi.object({
        teacherId: Joi.number().required()
    }),
    body: Joi.object({
        subjectName: Joi.string().min(3).required(),
    })
}

export const updateSubjectsBySubjectId = {
    params: Joi.object({
        subjectId: Joi.number().required()
    }),
    body: Joi.object({
        teacherId: Joi.number().required(),
        subjectName: Joi.string().min(3).required(),
    })
}

export const deleteSubjectsBySubjectId = {
    params: Joi.object({
        subjectId: Joi.number().required()
    })
}

export const createUserInfo = {
    body: Joi.object({
        password: Joi.string().min(8).regex(pwdRegex).required(),
        email: Joi.string().email().required(),
        name: Joi.string().required(),
        roleId: Joi.number().required(),
    })
}

export const login = {
    body: Joi.object({
        email: Joi.string().required(),
        password: Joi.string().required(),
        roleId: Joi.number().integer().required()
    })
}

export const getattendance = {
    query: Joi.object({
        studentId: Joi.number().required(),
        subjectId: Joi.number().required()
    })
}

export const enrollForSubject = {
    body: Joi.object({
        studentId: Joi.number().required(),
        subjectId: Joi.number().required()
    })
}

export const updateAttendance = {
    query: Joi.object({
        studentId: Joi.number().required(),
        subjectId: Joi.number().required()
    }),
    body: Joi.object({
        attendance: Joi.number().required()
    })
}

export const getUserInfoById = {
    params: Joi.object({
        userId: Joi.number().required()
    })
}