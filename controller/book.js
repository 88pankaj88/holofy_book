'use strict'

const Schema = require('../schema');
const Utility = require('../utility');
const Service = require('../service');

const BookController = {
    getBookDetails: async (req, res, next) => {
        try {
            let validatedData = await Schema.book.bookJoiSchemas.GET_BOOK_DETAILS.validateAsync(req.params).catch((err) => { //Doing validation Async to support any async type validation in future
                throw {status:Utility.constant.ERROR.BAD_REQUEST,error:Utility.common.convertJoiErr(err, Utility.constant.ERR_FIELD_TYPES.QUERY)}
            });
            let bookDetail = await Service.book.getBookDetails(validatedData); //catch error if need more than print
            req.returnResponse = bookDetail;
            return next();
        } catch (err) {
            console.error(err); //customised logger can be used instead
            return next(err);
        }
    },
    getAllBooks: async(req,res,next) => {
        try {
            req.returnResponse = await Service.book.getAllBooks(validatedData); //catch error if need more than print
            return next();
        } catch (err) {
            console.error(err); //customised logger can be used instead
            return next(err);
        }
    },
    addBook: async(req,res,next) => {
        try {
            let validatedData = await Schema.book.bookJoiSchemas.ADD_BOOK.validateAsync(req.body).catch((err) => { //Doing validation Async to support any async type validation in future
                throw {status:Utility.constant.ERROR.BAD_REQUEST,error:Utility.common.convertJoiErr(err, Utility.constant.ERR_FIELD_TYPES.QUERY)}
            });
            let newBook = await Service.book.addBook(validatedData); //catch error if need more than print
            return next();
        } catch (err) {
            console.error(err); //customised logger can be used instead
            return next(err);
        }
    },
    updateBook: async(req,res,next) => {
        try {
            let validatedData = await Schema.book.bookJoiSchemas.UPDATE_BOOK.validateAsync(req.body).catch((err) => { //Doing validation Async to support any async type validation in future
                throw {status:Utility.constant.ERROR.BAD_REQUEST,error:Utility.common.convertJoiErr(err, Utility.constant.ERR_FIELD_TYPES.QUERY)}
            });
            let toSet = {};
            ['bookName','bookReleaseDate','bookAuthorName'].forEach(function(field) { //Assuming all fields can be modified
                if(validatedData[field]) toSet[field] = validatedData[field];
            });
            let params = {
                filter: {bookUuid},
                update: {
                    $set: toSet
                },
                options: {}
            };
            let newBook = await Service.book.updateBook(params); //catch error if need more than print
            return next();
        } catch (err) {
            console.error(err); //customised logger can be used instead
            return next(err);
        }
    },
    dropBook: async (req, res, next) => {
        try {
            let validatedData = await Schema.book.bookJoiSchemas.DELETE_BOOK.validateAsync(req.params).catch((err) => { //Doing validation Async to support any async type validation in future
                throw {status:Utility.constant.ERROR.BAD_REQUEST,error:Utility.common.convertJoiErr(err, Utility.constant.ERR_FIELD_TYPES.QUERY)}
            });
            await Service.book.dropBook(validatedData); //catch error if need more than print
            req.returnResponse = {message:'success'};
            return next();
        } catch (err) {
            console.error(err); //customised logger can be used instead
            return next(err);
        }
    },
};

module.exports = BookController;