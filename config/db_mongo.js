'use strict'
const Utility = require('../utility');

const MongoConfig = {
    [Utility.constant.ENV.LOCAL]: {
        DB_NAME: 'library',
        DB_USER: 'root',
        DB_PASSWORD: 'root@123',
        MAX_POOL_SIZE: 10
    },
    [Utility.constant.ENV.DEV]: {
        DB_NAME: 'library',
        DB_USER: 'root',
        DB_PASSWORD: 'root@123',
        MAX_POOL_SIZE: 10
    },
    [Utility.constant.ENV.TEST]: {
        DB_NAME: 'library',
        DB_USER: 'root',
        DB_PASSWORD: 'root@123',
        MAX_POOL_SIZE: 10
    },
    [Utility.constant.ENV.STAGING]: {
        DB_NAME: 'library',
        DB_USER: 'root',
        DB_PASSWORD: 'root@123',
        MAX_POOL_SIZE: 10
    },
    [Utility.constant.ENV.PRODUCTION]: {
        DB_NAME: 'library',
        DB_USER: 'root',
        DB_PASSWORD: 'root@123',
        MAX_POOL_SIZE: 10
    },
};

module.exports = MongoConfig[process.env.ENV];
