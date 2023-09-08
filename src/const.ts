const joi = require('joi');

export const user = joi.object({
    userName: joi.string().alphanum().min(6).max(10).required(),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] }}),
    age: joi.number().min(18).max(50),
    dateOfBirth: joi.date().required()
});


