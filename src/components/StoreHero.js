import styled from "styled-components";
import Colors from "../assets/Colors";
import storeImage from "./../assets/images/shopImage1.png";
import Button from "./styled/Button.styled";
import Img from "./styled/Img.styled";

const StoreHeroEl = styled.section`
  margin-top: 1rem;
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 0.2rem;
`;

const SubTitle = styled.span`
  color: ${Colors.Gray};
`;

const InfoContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  column-gap: 1rem;
`;

const ButtonContainer = styled.span`
  display: flex;
  column-gap: 1rem;
`;

export default function StoreHero() {
  return (
    <StoreHeroEl>
      <Img width="30vw" src={storeImage} />
      <InfoContainer>
        <Title>Cristals</Title>
        <SubTitle>Verified artist</SubTitle>
      </InfoContainer>
      <ButtonContainer>
        <Button flw>Follow</Button>
        <Button np>Contant</Button>
      </ButtonContainer>
    </StoreHeroEl>
  );
}
