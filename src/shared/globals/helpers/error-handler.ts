import HTTP_STATUS from 'http-status-codes';

export interface IErrorResponse{

    message: string;
    statusCode: number;
    status: string;
        serializeErrors(): IError;
    }
    
    export interface IError{
        message: string;
        statusCode: number;
        status: string;
    }

    export abstract class CustomError extends Error{
        abstract statusCode: number;
        abstract status: string;

        constructor(message: string){
            super(message);
        }
        serializeErrors(): IError {
            return {
                message: this.message,
                status: this.status,
                statusCode: this.statusCode
            };
        }
    }

export class BadRequestError extends CustomError{
    statusCode = HTTP_STATUS.BAD_REQUEST;
    status = 'error';

    constructor(message: string){
        super(message);
    }
}

export class NotFoundError extends CustomError{
    statusCode = HTTP_STATUS.NOT_FOUND;
    status = 'error';

    constructor(message: string){
        super(message);
    }
}

export class InternalServerError extends CustomError{    
    statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR;
    status = 'error';

    constructor(message: string){
        super(message);
    }
}

export class UnauthorizedError extends CustomError{
    statusCode = HTTP_STATUS.UNAUTHORIZED;
    status = 'error';

    constructor(message: string){
        super(message);
    }
}

export class ForbiddenError extends CustomError{
    statusCode = HTTP_STATUS.FORBIDDEN;
    status = 'error';

    constructor(message: string){
        super(message);
    }
}

export class ConflictError extends CustomError{
    statusCode = HTTP_STATUS.CONFLICT;
    status = 'error';

    constructor(message: string){
        super(message);
    }
}

export class UnprocessableEntityError extends CustomError{  
    statusCode = HTTP_STATUS.UNPROCESSABLE_ENTITY;
    status = 'error';

    constructor(message: string){
        super(message);
    }
}   
