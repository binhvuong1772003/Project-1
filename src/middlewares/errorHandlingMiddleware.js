/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import { StatusCodes } from "http-status-codes";
import { env } from "~/config/environment";
export const errorHandlingMiddleware = (err, req, res, next) => {
    if (!err.statusCode) err.statusCode = StatusCodes.INTERNAL_SERVER_ERROR
    const responseError = {
        statusCode: err.statusCode,
        message: err.message || StatusCodes[err.StatusCodes],
        stack: err.stack
    }
    if (env.BUILD_MODE !== 'dev') delete responseError.stack
    res.status(responseError.statusCode).json(responseError)
}