const Joi = require('joi');

module.exports = {
    bookId: Joi.string().length(27),
    bookName: Joi.string().length(255),
    bookAuthor: Joi.string().length(255),
    bookReleaseDate: Joi.date().timestamp()
};