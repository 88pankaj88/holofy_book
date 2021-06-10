const Joi = require('joi');

const CommonJoiSchema = require('../commonJoiSchema');

const BookJoiSchemas = {
    GET_BOOK_DETAILS:Joi.object({
        bookUuid: CommonJoiSchema.bookId
    }),
    DELETE_BOOK:Joi.object({
        bookUuid: CommonJoiSchema.bookId
    }),
    UPDATE_BOOK:Joi.object({
        bookUuid: CommonJoiSchema.bookId,
        bookName:CommonJoiSchema.bookName,
        bookReleaseDate: CommonJoiSchema.bookReleaseDate,
        bookAuthorName: CommonJoiSchema.bookAuthor
    }),
    ADD_BOOK:Joi.object({
        bookName:CommonJoiSchema.bookName,
        bookReleaseDate: CommonJoiSchema.bookReleaseDate,
        bookAuthorName: CommonJoiSchema.bookAuthor
    }),
};

module.exports = BookJoiSchemas;