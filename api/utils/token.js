import jwt from "jsonwebtoken" // falta instalar
import { SECRET } from "../config/config.js"

export const generateToken = (payload) => {
    const token = jwt.sign({ payload }, SECRET, {expiresIn:"2d"});
    return token;
  };
  
export const verifyToken = (token) => {
    const tokenverify = jwt.verify(token, SECRET);
    return tokenverify;
};