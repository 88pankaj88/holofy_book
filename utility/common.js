'use strict'

const moment = require('moment');

const Common = {
    convertErrorToJson: (err) => {
        if (err instanceof Error) {
            let result = {};
            Object.getOwnPropertyNames(err).forEach(key => {
                result[key] = err[key];
            });
            return result;
        }
        return err;
    },
    convertToMongoQueryObj: (map, params) => {
        let query = {};
        let options = {};
        Object.keys(params).forEach((key) => {
            let qKey = map[key].mapTo ? map[key].mapTo : key;
            let value = params[key];
            if (map[key].type) {
                switch (map[key].type) {
                    case "date":
                        value = moment.utc(value).toDate();
                        break;
                    default:
                        break;
                }
            }
            switch (map[key].id) {
                case 1:
                    query[qKey] = value;
                    break;
                case 2:
                    if (!query[qKey]) {
                        query[qKey] = {};
                    }
                    query[qKey][map[key].func] = value;
                    break;
                case 3:
                    options[qKey] = value;
                    break;
                case 4:
                    let sortOrder = value ? 1 : -1;
                    options["sort"] = {
                        [map[key].field]: sortOrder
                    };
                    break;
                default:
                    break;
            }
        });
        return { query, options };
    },
    convertJoiErr: (joiErr, fieldType) => {
        let errors = [];
        for (let idx = 0; idx < joiErr.details.length; idx++) {
            errors.push({
                message: joiErr.details[idx].message,
                details: {
                    field_type: fieldType,
                    location: joiErr.details[idx].path,
                    issue: joiErr.details[idx].type
                }
            });
        }
        return errors;
    }
};
module.exports = Common;
