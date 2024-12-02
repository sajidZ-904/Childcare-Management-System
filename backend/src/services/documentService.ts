import AWS from 'aws-sdk';
import { createDocument, getDocumentById } from '../models/documentModel';
import { S3 } from 'aws-sdk';

const s3 = new AWS.S3();
const BUCKET_NAME = process.env.AWS_BUCKET_NAME || 'your-bucket-name';

export const uploadFile = async (fileBuffer: Buffer, metadata: { userId: number, fileName: string }) => {
  const s3Params: S3.PutObjectRequest = {
    Bucket: BUCKET_NAME,
    Key: `${metadata.userId}/${metadata.fileName}`,
    Body: fileBuffer,
    ContentType: 'application/pdf', // Example for PDF files
  };

  const s3Response = await s3.upload(s3Params).promise();

  // Store file metadata in the database
  const document = await createDocument(metadata.fileName, s3Response.Location, metadata, 1);

  return document.fileUrl;
};

export const getFile = async (fileId: number) => {
  const document = await getDocumentById(fileId);
  if (!document) throw new Error('File not found');
  return document;
};
