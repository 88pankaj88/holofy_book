const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookUuid: {
        bookUuidtype: String,
        required: true,
        unique: true
    },
    bookName: {
        type: String,
        required: true
    },
    bookReleaseDate: {
        type: Number,
        required: true
    },
    bookAuthorName: {
        type: String,
        required: true
    }
}, {
    timestamps: {
        createdAt: "created_at", updatedAt: "updated_at",
        currentTime: () => new Date().toISOString()
    }
});

module.exports = mongoose.model("Book", bookSchema, "book");