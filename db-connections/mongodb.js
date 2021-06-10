const mongoose = require('mongoose');

const Utility = require('../utility');
const MongoConfig = require('../config/db_mongo');
const DB_HOST = process.env.MONGO_HOST || 'localhost';
const DB_PASSWORD = encodeURIComponent(`${MongoConfig.DB_PASSWORD}`)
const DB_URL = `mongodb://${MongoConfig.DB_USER}:${DB_PASSWORD}@${DB_HOST}/${MongoConfig.DB_NAME}`;

try {
    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true,
        poolSize: MongoConfig.MAX_POOL_SIZE,
        autoIndex: false
    }).catch((err) => {
        console.error({ errTrace: Utility.common.convertErrorToJson(err) }, "Unable to create mongoose default connection.");
    });

    mongoose.connection.on("connected", () => {
        console.info({}, `Mongoose default connection open to ${DB_HOST}/${MongoConfig.DB_NAME}.`);
    });

    mongoose.connection.on('error', (err) => {
        console.error({ errTrace: Utility.common.convertErrorToJson(err) }, "Unable to create mongoose default connection.");
    });

    mongoose.connection.on("disconnected", () => {
        console.warn({}, "Mongoose default connection disconnected.");
    });
} catch (err) {
    console.error({ errTrace: err }, "Mongoose Connection Error.");
    process.exit(0);
}

module.exports = mongoose.connection;