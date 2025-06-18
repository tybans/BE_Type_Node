import {Request, Response, NextFunction, RequestHandler} from 'express'; 
import { ObjectSchema } from 'joi';  

export const validateBody = ( schema: ObjectSchema): RequestHandler => {

  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, {abortEarly:false}) 
    if(error) {
       res.status(400).json({
        success: false,
        message: 'Validation error',
        details: error.details.map((detail) => detail.message),
      })
    }
    next(); 
  } 

} 
