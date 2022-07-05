"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthValidate {
    static userId(userId) {
        const lowerCaseRegex = /[a-z]/g;
        const lowerCaseCondition = userId.match(lowerCaseRegex);
        const idLenghtCondition = userId.length >= 5 && userId.length <= 12;
        // userId의 길이가 0일 경우
        if (userId.length === 0 || !lowerCaseCondition || !idLenghtCondition) {
            return;
        }
        return true;
    }
    static password(password) {
        const specialCharRegex = /[`\\~!@#$%^&*|\'\";:\/?]/g;
        const specialCharCondition = password.match(specialCharRegex);
        const koreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
        const koreanCondition = password.match(koreanRegex);
        const passwordLenghtCondition = password.length >= 10 && password.length <= 20;
        // 길이가 0일 경우
        if (password.length === 0 ||
            koreanCondition ||
            !passwordLenghtCondition ||
            !specialCharCondition) {
            return;
        }
        return true;
    }
    static rePassword(password, rePassword) {
        if (password !== rePassword) {
            return;
        }
        return true;
    }
    static nickname(nickname) {
        const specialCharRegex = /[`\\~!@#$%^&*|\'\";:\/?]/g;
        const specialCharCondition = nickname.match(specialCharRegex); // 특수문자 포함되면 true 반환
        const nicknameLengthCondition = nickname.length >= 2 && nickname.length <= 6;
        if (specialCharCondition || !nicknameLengthCondition) {
            return;
        }
        return true;
    }
    static email(email) {
        const emailCheckRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        const emailCheckCondition = email.match(emailCheckRegex);
        if (emailCheckCondition) {
            return true;
        }
        return;
    }
}
exports.default = AuthValidate;
//# sourceMappingURL=authValidate.js.map