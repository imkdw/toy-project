import { Request, Response, NextFunction } from "express";
import { insertUser, getUser } from "../models/authModel";
import { compareHash, createHash } from "../module/secure";
import { createToken, decodeToken } from "../module/jwt";

/** 회원가입 */
export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, rePassword, nickname } = req.body;

  if (password !== rePassword) {
    res.status(400).json({ message: "비밀번호가 일치하지 않습니다." });
    return;
  }

  const hashedPassword = await createHash(password);
  await insertUser({ email, hashedPassword, nickname });
  res.json("hello");
};

/** 로그인 */
export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  /** 받은 값이 비어있는지 확인 */
  if (email.length === 0 || password.length === 0) {
    res.status(400).json({ message: "이메일 또는 패스워드가 비어있음" });
    return;
  }

  const userQuery = await getUser(email);

  /** 이메일로 데이터 조회 불가시 */
  if (userQuery.length === 0) {
    res.status(400).json({ message: "유저 확인 불가" });
    return;
  }

  /** 이메일 조회는 성공이나 패스워드 불일치시 */
  const hashedPassword = userQuery[0].password;
  const isPasswordMatch = await compareHash(password, hashedPassword);
  if (!isPasswordMatch) {
    res.status(400).json({ messagE: "패스워드 불일치" });
    return;
  }

  const nickname = userQuery[0].nickname;
  const accessToken = createToken(email, nickname);

  res.json({ accessToken });
};

/** 사용자가 기존에 로그인한 유저인지 확인 */
export const checkLoggedIn = async (req: Request, res: Response, next: NextFunction) => {
  const { accessToken } = req.body;

  if (!accessToken) {
    res.status(400).json({ message: "accessToken이 없음" });
  }

  const decodedToken = decodeToken(accessToken);

  if (decodedToken.email === "" && decodedToken.nickname === "") {
    res.status(400).json({ message: "토큰이 만료되었거나 변질됨" });
    return;
  }

  const email = decodedToken.email;
  const userQuery = await getUser(email);

  if (userQuery.length === 0) {
    res.status(400).json({ message: "유저 확인 불가" });
    return;
  }

  res.json({ message: `인증성공` });
};
