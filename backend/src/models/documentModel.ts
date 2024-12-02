import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createDocument = async (name: string, fileUrl: string, metadata: object, version: number) => {
  return prisma.document.create({
    data: {
      name,
      fileUrl,
      metadata,
      version,
    },
  });
};

export const getDocumentById = async (id: number) => {
  return prisma.document.findUnique({
    where: { id },
  });
};
