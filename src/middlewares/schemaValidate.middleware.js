export function validateSchema(schema){
    return (req,res,next)=>{
        const {error} = schema.validate(req.body,{abortEarly : false});
        if(error) {
            const errorList = error.details.map((e)=> e.message)
            return res.status(422).send(errorList);
        };

        next();
    }
}