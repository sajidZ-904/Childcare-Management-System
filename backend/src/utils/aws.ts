import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'your-access-key',
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'your-secret-key',
  region: process.env.AWS_REGION || 'your-region',
});

const s3 = new AWS.S3();

export default s3;
