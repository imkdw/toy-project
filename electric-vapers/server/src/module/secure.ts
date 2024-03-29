import bcrypt from "bcrypt";
import { v4 } from "uuid";

export const createHash = async (plainText: string) => {
  return await bcrypt.hash(plainText, 10);
};

export const compareHash = async (plainText: string, hashedText: string) => {
  return await bcrypt.compare(plainText, hashedText);
};

export const getUUID = () => {
  return v4();
};
