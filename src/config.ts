import dotenv from 'dotenv';
import path from 'path';
import Joi from 'joi'; 

dotenv.config({ path: path.join(__dirname, '../.env') });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    REACT_APP_BUCKETNAME: Joi.string().required(),
    REACT_APP_DIRNAME: Joi.string().required(),
    REACT_APP_REGION: Joi.string().required(),
    REACT_APP_ACCESS_KEY: Joi.string().required(),
    REACT_APP_SECRET_ACCESS_KEY: Joi.string().required()
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}


export const awsConfig={
  bucketName: envVars.REACT_APP_BUCKET_NAME || '', 
  dirName: envVars.REACT_APP_DIRNAME || '',    
  region: envVars.REACT_APP_REGION || '',
  accessKeyId: envVars.REACT_APP_ACCESS_KEY || '',
  secretAccessKey: envVars.REACT_APP_SECRET_ACCESS_KEY || '', 
}
