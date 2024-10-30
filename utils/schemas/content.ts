import Joi from "joi";

const ContentSchemas = {
    edit: Joi.object({
        title: Joi.string().alphanum().min(3).max(100),
        thumbnail: Joi.any(),
        description: Joi.string().alphanum().min(1).max(500),
        
    })
}
export default ContentSchemas;