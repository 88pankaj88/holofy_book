'use strict'

const Model = require('../model');
const Utility = require('../utility');

const BookApi = {
    getBookDetails: async (params) => {
        try {
            let { query, options } = Utility.common.convertToMongoQueryObj({"bookUuid": { id: 1 }}, params);
            let order = await Model.book.findOne(query, null, options);
            return order;
        } catch (err) {
            throw {status: Utility.constant.ERROR.INTERNAL_SERVER_ERROR_CODE,message: Utility.constant.ERROR.INTERNAL_SERVER_ERROR_MESSAGE};
        }
    },
    getAllBooks: async (params) => {
        try {
            return await Model.book.find({});
        } catch (err) {
            throw {status: Utility.constant.ERROR.INTERNAL_SERVER_ERROR_CODE,message: Utility.constant.ERROR.INTERNAL_SERVER_ERROR_MESSAGE};
        }
    },
    addBook: async (params) => {
        try {
            params["bookUuid"] = await Utility.crypto.getKsuid(); //Assumng it shall create new book id always
            let order = await Model.order.create(params);
            return order.toObject();
        } catch (err) {
            throw {status: Utility.constant.ERROR.INTERNAL_SERVER_ERROR_CODE,message: Utility.constant.ERROR.INTERNAL_SERVER_ERROR_MESSAGE};
        }
    },
    updateBook: async(params) => {
        try {
            return await Model.book.findOneAndUpdate(
                params.filter,
                params.update,
                params.options
            );
        } catch (err) {
            throw {status: Utility.constant.ERROR.INTERNAL_SERVER_ERROR_CODE,message: Utility.constant.ERROR.INTERNAL_SERVER_ERROR_MESSAGE};
        }
    },
    dropBook:async (params) => {
        try {
            let { query, options } = Utility.common.convertToMongoQueryObj({"bookUuid": { id: 1 }}, params);
            await Model.book.findOne(query,null,options).remove();
        } catch (err) {
            throw {status: Utility.constant.ERROR.INTERNAL_SERVER_ERROR_CODE,message: Utility.constant.ERROR.INTERNAL_SERVER_ERROR_MESSAGE};
        }
    }
};

module.exports = BookApi;