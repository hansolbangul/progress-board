import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;
  const fileUploaded = await storage.createFile("647c73126ac3efa4c3a0", ID.unique(), file);
  return fileUploaded;
};

export default uploadImage;
