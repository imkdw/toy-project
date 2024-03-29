import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledReviewItem = styled(Link)`
  width: 21%;
  height: 400px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all 0.5;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Sumbnail = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 10px 10px 0 0;
`;

const LiquidInfo = styled.div`
  width: 100%;
  height: 30%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const LiquidName = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
`;

const LiquidVolumn = styled.div`
  width: 100%;
  font-size: 14px;
  color: #828282;
`;

const LiquidEval = styled.div`
  font-size: 15px;
`;

interface postData {
  reviewId: string;
  title: string;
  introduce: string;
  volume: string;
  nicoVolume: string;
  sumbnail: string;
}

const ReviewItem = ({ reviewId, title, introduce, volume, nicoVolume, sumbnail }: postData) => {
  return (
    <StyledReviewItem to={"/liquid-review/" + reviewId} key={reviewId}>
      <Sumbnail src={sumbnail} />
      <LiquidInfo>
        <LiquidName>{title}</LiquidName>
        <LiquidVolumn>
          용량 : {volume}ml / 니코틴 : {nicoVolume}mg
        </LiquidVolumn>
        <LiquidEval># {introduce}</LiquidEval>
      </LiquidInfo>
    </StyledReviewItem>
  );
};

export default ReviewItem;
