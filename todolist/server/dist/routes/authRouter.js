"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authService_1 = __importDefault(require("../service/authService"));
const authRouter = express_1.default.Router();
/** 회원가입 라우터 - /auth/register */
authRouter.post("/register", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userDTO = req.body;
    const userRecord = yield authService_1.default.register(userDTO);
    if (userRecord.code) {
        res.status(400).json({ msg: userRecord.code });
        return;
    }
    res.status(200).json(userDTO);
}));
exports.default = authRouter;
//# sourceMappingURL=authRouter.js.map