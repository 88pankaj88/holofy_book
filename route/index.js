
'use strict'
const Controller = require('../controller');

const RouteURLs = function (app) {
     app.get("/books",Controller.book.getAllBooks ,Controller.common.respond, Controller.common.handleError);
     app.get("/book/:bookUuid",Controller.book.getBookDetails ,Controller.common.respond, Controller.common.handleError);
     app.post("/book/add",Controller.book.addBook ,Controller.common.respond, Controller.common.handleError);
     app.post("/book/{:bookUuid}/update",Controller.book.updateBook ,Controller.common.respond, Controller.common.handleError);
     app.post("/book/{:bookUuid}/delete",Controller.book.dropBook ,Controller.common.respond, Controller.common.handleError);
};
module.exports = RouteURLs;