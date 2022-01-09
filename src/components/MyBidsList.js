import styled from "styled-components";
import Colors from "../assets/Colors";
import bidImage from "./../assets/images/bidImage.png";
import Img from "./styled/Img.styled";

const MyBidsListEl = styled.div`
  padding: 0 1rem;
  margin-top: 1rem;
`;

const Title = styled.h3`
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const BidItemEl = styled.span`
  display: flex;
  padding: 0.5rem;
  cursor: pointer;
  width: 100%;
  align-items: center;
  transition-property: background-color, border-radius;
  transition-duration: 0.5s;

  &:hover {
    background-color: ${Colors.GrayBorder};
    border-radius: 12px;
  }
`;

const BidData = styled.span`
  margin-left: 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  row-gap: 0.5rem;
`;

const BidTitle = styled.span`
  font-weight: 600;
`;

const BidDesc = styled.span`
  color: ${Colors.Gray};
`;

const BidAmount = styled.span`
  font-weight: 600;
`;

function BidItem() {
  return (
    <BidItemEl>
      <Img width="4rem" height="4rem" borderRadius="12px" src={bidImage} />
      <BidData>
        <BidTitle>Clay boyz 174</BidTitle>
        <BidDesc>Waldo</BidDesc>
      </BidData>
      <BidAmount>1.4 ETH</BidAmount>
    </BidItemEl>
  );
}

export default function MyBidsList() {
  return (
    <MyBidsListEl>
      <Title>Your bids</Title>
      <ItemList>
        <BidItem />
        <BidItem />
      </ItemList>
    </MyBidsListEl>
  );
}
