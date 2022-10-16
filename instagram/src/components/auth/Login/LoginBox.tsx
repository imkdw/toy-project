import styled from "styled-components";
import { SquareFacebook } from "../../../icon/FontAwesome";
import { Link } from "react-router-dom";

import appStore from "../../../assets/appstore.png";
import playStore from "../../../assets/playstore.png";
import Input from "../common/Input";
import ContourLine from "../common/ContourLine";
import Logo from "../common/Logo";
import Form from "../common/Form";

const StyledLoginBox = styled.div`
  width: 350px;
  height: 570px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledLoginBoxTop = styled.div`
  width: 100%;
  height: 390px;
  border: 1px solid #dbdbdb;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLoginBoxMiddle = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLoginBoxBottom = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  gap: 30px;
  flex-direction: column;
`;

const StyledButton = styled.button`
  width: 268px;
  height: 30px;
  border: none;
  background-color: #b2dffc;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 10px;
`;

const StyledContourText = styled.div`
  font-size: 13px;
  color: #8e8e8e;
  font-weight: bold;
`;

const StyledLinks1 = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledLink = styled.div`
  width: 268px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFacebookLink = styled(Link)`
  color: #385185;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
`;

const StyledPasswordLink = styled(Link)`
  color: #00376b;
  font-size: 12px;
`;

const StyledMiddleText = styled.p`
  color: #252525;
  font-size: 15px;
`;

const StyledRegisterLink = styled(Link)`
  color: #0095f6;
  font-size: 14px;
  font-weight: bold;

  &:visited {
    color: #0095f6;
  }
`;

const StyledBottomText = styled.div`
  color: #262626;
  font-size: 14px;
`;

const StyledDonwloadLists = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledDownloadButton = styled.button`
  width: 136px;
  height: 40px;
`;

const StyledDownloadButtonImage = styled.img`
  width: 136px;
  height: 40px; ;
`;

const LoginBox = () => {
  return (
    <StyledLoginBox>
      <StyledLoginBoxTop>
        <Logo height="130px" />
        <Form height="145px">
          <Input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" height="38px" />
          <Input type="password" placeholder="비밀번호" height="38px" />
          <StyledButton type="submit">로그인</StyledButton>
        </Form>
        <ContourLine />
        <StyledLinks1>
          <StyledLink>
            <SquareFacebook width="18px" height="18px" color="#385185" />
            <StyledFacebookLink to="#">Facebook으로 로그인</StyledFacebookLink>
          </StyledLink>
          <StyledLink>
            <StyledPasswordLink to="#">비밀번호를 잊으셨나요?</StyledPasswordLink>
          </StyledLink>
        </StyledLinks1>
      </StyledLoginBoxTop>
      <StyledLoginBoxMiddle>
        <StyledMiddleText>
          계정이 없으신가요? <StyledRegisterLink to="/register">가입하기</StyledRegisterLink>
        </StyledMiddleText>
      </StyledLoginBoxMiddle>
      <StyledLoginBoxBottom>
        <StyledBottomText>앱을 다운로드하세요.</StyledBottomText>
        <StyledDonwloadLists>
          <StyledDownloadButton>
            <StyledDownloadButtonImage src={appStore} />
          </StyledDownloadButton>
          <StyledDownloadButton>
            <StyledDownloadButtonImage src={playStore} />
          </StyledDownloadButton>
        </StyledDonwloadLists>
      </StyledLoginBoxBottom>
    </StyledLoginBox>
  );
};

export default LoginBox;
