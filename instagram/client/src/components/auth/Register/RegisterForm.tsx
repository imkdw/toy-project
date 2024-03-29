import Form from "../common/Form";
import Input from "../common/Input";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState, FocusEvent, FormEvent } from "react";
import { ChangeEvent } from "react";
import axios from "axios";
import config from "./../../../config/config";

const RegisterDesc = styled.p`
  width: 262px;
  height: 60px;
  color: #828282;
  font-size: 12px;
  text-align: center;
`;

const DescInfoLink = styled(Link)`
  font-weight: bold;
  color: #828282;

  &:visited {
    color: #8e8e8e;
  }
`;

interface IRegisterButtonProps {
  backgroundColor: string;
}

const RegisterButton = styled.button<IRegisterButtonProps>`
  width: 268px;
  height: 30px;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
`;

const RegisterForm = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState({
    email: "",
    name: "",
    nickname: "",
    password: "",
  });
  const [isAccountValid, setIsAccountValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { email, name, nickname, password } = account;

  const accountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setAccount({
      ...account,
      [name]: value,
    });
  };

  const accountCheckHanlder = (event: FocusEvent<HTMLInputElement>) => {
    if (email && name && nickname && password) {
      setIsAccountValid(true);
    } else {
      setIsAccountValid(false);
    }
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const response = await axios.post(config.url.auth.registerUrl, {
      email,
      name,
      nickname,
      password,
    });
    setIsLoading(false);

    /** 회원가입 API 요청이 완료되면 */
    if (!isLoading) {
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    }
  };

  return (
    <Form height="360px" onSubmit={submitHandler}>
      <Input
        type="text"
        placeholder="이메일 주소"
        height="36px"
        onChange={accountChangeHandler}
        name="email"
        value={email}
        onBlur={accountCheckHanlder}
      />
      <Input
        type="text"
        placeholder="성명"
        height="36px"
        onChange={accountChangeHandler}
        name="name"
        value={name}
        onBlur={accountCheckHanlder}
      />
      <Input
        type="text"
        placeholder="사용자 이름"
        height="36px"
        onChange={accountChangeHandler}
        name="nickname"
        value={nickname}
        onBlur={accountCheckHanlder}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        height="36px"
        onChange={accountChangeHandler}
        name="password"
        value={password}
        onBlur={accountCheckHanlder}
      />
      <RegisterDesc>
        저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다.
        <DescInfoLink to="#">더 알아보기</DescInfoLink>
      </RegisterDesc>
      <RegisterDesc>
        가입하면 <DescInfoLink to="">약관</DescInfoLink>,{" "}
        <DescInfoLink to="">개인정보처리방침</DescInfoLink> 및{" "}
        <DescInfoLink to="">쿠키 정책</DescInfoLink>에 동의하게 됩니다.
      </RegisterDesc>
      {isAccountValid ? (
        <RegisterButton backgroundColor="#0095F6">가입</RegisterButton>
      ) : (
        <RegisterButton backgroundColor="#B2DFFC">가입</RegisterButton>
      )}
    </Form>
  );
};

export default RegisterForm;
