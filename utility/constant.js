'use strict'

const Constant = {
    ERROR: {
        AUTHENTICATION_FAILURE_MESSAGE: "Invalid Email or Password",
        AUTHENTICATION_FAILURE_CODE: 412,
        UNAUTHORIZED_CODE: 401,
        UNAUTHORIZED_MESSAGE: "Unauthorized.",
        INTERNAL_SERVER_ERROR_CODE: 500,
        INTERNAL_SERVER_ERROR_RES: {},
        LEAD_ALREADY_SHARED_CODE: 500,
        LEAD_WITH_DIFF_ORG_ID: 500,
        LEAD_WITH_DIFF_ORG_ID_MSG: 'PointCode exist for a different subsource already',
        LEAD_ALREADY_SHARED_MESSAGE: 'Lead Already shared for the pointCode',
        IS_PRESCREEN_POINTCODE_MESSAGE: 'The pointCode is associated with some prescreencode',
        IS_PRESCREEN_POINTCODE_CODE: 500,
        INTERNAL_SERVER_ERROR_MESSAGE: "Internal Server Error",
        FAILED_TO_DESTROY_SESSION_CODE: 500,
        FAILED_TO_DESTROY_SESSION_MESSAGE: "Failed to Logout",
        SESSION_ABSENT_CODE: 412,
        SESSION_PRESENT_CODE: 412,
        SESSION_ABSENT_MESSAGE: 'User is not logged in',
        INVALID_INPUT_MESSAGE: 'Invalid or Missing Input',
        INVALID_INPUT_CODE: 400,
        USER_ABSENT_MESSAGE: 'Email Id is registered',
        USER_ABSENT_CODE: 412,
        API_CALL_FAILURE_CODE: 503,
        API_CALL_FAILURE_MESSAGE: 'Service Unavailable',
        USER_ALREADY_REGISTERED_CODE: 412,
        USER_ALREADY_REGISTERED_MESSAGE: 'User already registered',
        BUYER_NOT_FOUND: 'Buyer not found',
        FILE_NOT_PRESENT: 'File does not exist',
        PRODUCT_IS_NOT_ASSOCIATED_WITH_GIVEN_POINTCODE: 'ProductId is not associated with given pointCode',
        OFFER_ID_ABSENT: 'Offer id does not exist',
        OFFER_ID_INVALID: 'Invalid Offer Id',
        OUT_OF_RANGE_LOAN_AMOUNT: 'LoanAmount can\'t be out of range of min and max offer amount',
        NOT_APPROVED: 'Not Approved',
        MISSING_OFFER_KEY: 'Missing offer key',
        NODE_SHARE_LEAD: 'Error from Node API for shareLead with status code : ',
        POINTCODE_ABSENT_CODE: 500,
        POINTCODE_ABSENT_MESSAGE: 'PointCode not present',
        SENDBACK_ABSENT_MESSAGE: 'Sendback not present',
        MISSING_LEADID_CODE: 500,
        MISSING_LEADID_MESSAGE: 'Missing lead id',
        INVALID_SHARELEAD_REQUEST: "Invalid Sharelead request",
        PRODUCT_ID_NOT_PRESENT: "Product Id is not present",
        BLOCKCHAIN_TIMEOUT: "Blockchain Timeout",
        SHARE_LEAD_API_FAILED: "Share Lead API Failed",
        ERROR_WITH_QUALIFY_API: "Error with Qualify API",
        STATE_IDENTIFICATION_FAILED_CODE: 412,
        STATE_IDENTIFICATION_FAILED_MESSAGE: 'Failed to Identify Customer State',
        BAD_REQUEST: 400,
        INVALID_DATA: 'Invalid Data',
        NOT_FOUND: 404,
        NOT_FOUND_MESSAGE: "The requested resource not found.",
        INVALID_INPUT_TYPE: "Invalid Input type",
        VALIDATION_FAILED: "VALIDATION FAILED",
        REDIS_ERROR: "REDIS ERROR",
        FORBIDDEN_CODE: 403
    },
    SUCCESS: {
        NO_CONTENT: 204
    },
    SUCCESS_MESSAGE: "Updated Successfully",
    SUCCESS_RETURN_CODE: 200,
    SUCCESS_CREATED_RETURN_CODE: 201,
    STRING_ACTIVE: "Active",
    GENERAL: {
        BLANK_STRING: "",
        COLON: ':',
        COMMA: ',',
        BCRYPT_PASSWORD_HASH_LENGTH: 8,
        STANDARD_LEAD_ID_LENGTH: 16
    },
    EncryptionParameter: {
        ALGORITHM: 'aes-256-cbc',
        KEY_SIZE: 32,
        ITERATIONS: 2140,
        CIPHER_ENCODING: 'base64',
        MESSAGE_ENCODING: 'utf8',
        HASH_ALGO: 'sha512'
    },
    ENCRYPTION_SSN: {
        ALGORITHM: "aes-256-cbc",
        SALT: "51EAB8AE53679D47",
        KEY: "8B7B9F483E7294927DC2D78CEE82055B66F66BC219C6F42866F66BC219C6F428",
        IV: "7E612269CDEA55333A42E69F8BA76E29",
    },
    DEFAULT_CURRENCY_CODE: "USD",
    ENV: {
        PRODUCTION: "production",
        STAGING: "staging",
        TEST: "test",
        DEV: "dev",
        LOCAL: "local"
    },
    LOG_LEVEL_LABELS: {
        FATAL: "fatal",
        ERROR: "error",
        WARN: "warn",
        INFO: "info",
        DEBUG: "debug",
        TRACE: "trace"
    },
    LOG_LEVEL_VALUES: {
        FATAL: 60,
        ERROR: 50,
        WARN: 40,
        INFO: 30,
        DEBUG: 20,
        TRACE: 10
    },
    ORDER_STATUS: {
        CREATED: 100,
        IN_PROGRESS: 200,
        COMPLETED: 300,
        FAILED: 400
    },
    ORDER_STATUS_REV_MAP: {
        100: "CREATED",
        200: "IN_PROGRESS",
        300: "COMPLETED",
        400: "FAILED"
    },
    ORDER_STATUS_ARR: [
        "CREATED",
        "IN_PROGRESS",
        "COMPLETED",
        "FAILED"
    ],
    TRANSACTION_STATUS: {
        CREATED: 100,
        IN_PROGRESS: 200,
        COMPLETED: 300,
        FAILED: 400
    },
    TRANSACTION_STATUS_REV_MAP: {
        100: "CREATED",
        200: "IN_PROGRESS",
        300: "COMPLETED",
        400: "FAILED"
    },
    TRANSACTION_STATUS_ARR: [
        "CREATED",
        "IN_PROGRESS",
        "COMPLETED",
        "FAILED"
    ],
    ERR_FIELD_TYPES: {
        HEADER: "HEADER",
        QUERY: "QUERY",
        PATH: "PATH",
        BODY: "BODY"
    },
    ALLOWED_CURRENCIES: {
        USD: "USD"
    },
    ALLOWED_CURRENCIES_ARR: [
        "USD"
    ],
    TRANSACTION_TYPES: {
        PAYMENT: "PAYMENT",
        REFUND: "REFUND",
        DIRECT_PAYMENT: "DIRECT_PAYMENT"
    },
    TRANSACTION_TYPES_ARR: [
        "PAYMENT",
        "REFUND",
        "DIRECT_PAYMENT"
    ],
    THIRD_PARTY_TIMEOUT: 30000,
    LOG_ERROR_DEFAULT_MESSAGE: "Unknown Error.",
    LOG_ERROR_INVALID_INPUT: "Invalid User Input.",
    SENTRY_DEFAULT_FINGERPRINT: ["{{default}}", "POS_TRANSACTION"],
    SENTRY_DEFAULT_MESSAGE: "Unkown Error",
    SENTRY_MESSAGE_PREFIX: "POS_TRANSACTION: ",
    LOG_INPUT_MESSAGE: "User Input.",
    TRANSACTION_INTERNAL_STATUS_ARR: [
        "CV_STARTED",
        "CV_FAILED",
        "CV_COMPLETED",
        "FRAUD_CHECK_FAILED",
        "FINANCING_STARTED",
        "FINANCING_APPROVED",
        "FINANCING_UNAPPROVED",
        "FINANCING_OFFER_SELECTED",
        "FINANCING_READY_TO_FUND",
        "PAYMENT_CREATED",
        "PAYMENT_AUTHORIZED",
        "PAYMENT_COMPLETED",
        "PAYMENT_FAILED",
        "FINANCING_FUNDED",
        "FUNDS_PARTIALLY_USED",
        "FUNDS_FULLY_USED"
    ],
    TRANSACTION_INTERNAL_STATUS: {
        CV_STARTED: "CV_STARTED",
        CV_FAILED: "CV_FAILED",
        CV_COMPLETED: "CV_COMPLETED",
        FRAUD_CHECK_FAILED: "FRAUD_CHECK_FAILED",
        FINANCING_STARTED: "FINANCING_STARTED",
        FINANCING_APPROVED: "FINANCING_APPROVED",
        FINANCING_UNAPPROVED: "FINANCING_UNAPPROVED",
        FINANCING_OFFER_SELECTED: "FINANCING_OFFER_SELECTED",
        FINANCING_READY_TO_FUND: "FINANCING_READY_TO_FUND",
        PAYMENT_CREATED: "PAYMENT_CREATED",
        PAYMENT_AUTHORIZED: "PAYMENT_AUTHORIZED",
        PAYMENT_COMPLETED: "PAYMENT_COMPLETED",
        PAYMENT_FAILED: "PAYMENT_FAILED",
        FINANCING_FUNDED: "FINANCING_FUNDED",
        FUNDS_PARTIALLY_USED: "FUNDS_PARTIALLY_USED",
        FUNDS_FULLY_USED: "FUNDS_FULLY_USED"
    },
    TRANSACTION_INTERNAL_STATUS_MAP: {
        CV_STARTED: 100,
        CV_FAILED: 200,
        CV_COMPLETED: 300,
        FRAUD_CHECK_FAILED: 350,
        FINANCING_STARTED: 400,
        FINANCING_APPROVED: 500,
        FINANCING_UNAPPROVED: 600,
        FINANCING_OFFER_SELECTED: 700,
        FINANCING_READY_TO_FUND: 800,
        PAYMENT_CREATED: 900,
        PAYMENT_AUTHORIZED: 1000,
        PAYMENT_COMPLETED: 1100,
        PAYMENT_FAILED: 1200,
        FINANCING_FUNDED: 1300,
        FUNDS_PARTIALLY_USED: 1400,
        FUNDS_FULLY_USED: 1500
    },
    TRANSACTION_INTERNAL_STATUS_REV_MAP: {
        100: "CV_STARTED",
        200: "CV_FAILED",
        300: "CV_COMPLETED",
        350: "FRAUD_CHECK_FAILED",
        400: "FINANCING_STARTED",
        500: "FINANCING_APPROVED",
        600: "FINANCING_UNAPPROVED",
        700: "FINANCING_OFFER_SELECTED",
        800: "FINANCING_READY_TO_FUND",
        900: "PAYMENT_CREATED",
        1000: "PAYMENT_AUTHORIZED",
        1100: "PAYMENT_COMPLETED",
        1200: "PAYMENT_FAILED",
        1300: "FINANCING_FUNDED",
        1400: "FUNDS_PARTIALLY_USED",
        1500: "FUNDS_FULLY_USED"
    },
    POS_CARD: {
        CARD_VENDORS: {
            MARQETA: "MARQETA"
        }
    },
    POS_FRAUD: {
        FRAUD_CHECK: {
            PASS: "PASS"
        },
        INCOME_TYPES: {
            PER_ANNUM: "yearly",
            PER_MONTH: "monthly"
        }
    },
    POS_FINANCING: {
        INCOME_TYPES: {
            PER_MONTH: "PER_MONTH",
            PER_ANNUM: "PER_ANNUM"
        }
    }
};

Constant["ERROR"]["INTERNAL_SERVER_ERROR_RES"] = {
    status: Constant["ERROR"]["INTERNAL_SERVER_ERROR_CODE"],
    errors: [
        {
            message: Constant["ERROR"]["INTERNAL_SERVER_ERROR_MESSAGE"]
        }
    ]
};
module.exports = Constant;
