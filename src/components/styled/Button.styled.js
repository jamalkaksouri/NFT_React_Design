import styled from "styled-components";
import Colors from "../../assets/Colors";

const Button = styled.button`
  background-color: ${(p) =>
    p.bgColor ? p.bgColor : p.np ? Colors.CardBackground : Colors.Primary};
  color: ${(p) => (p.color ? p.color : p.np ? "" : Colors.CardBackground)};
  border-radius: 12px;
  cursor: pointer;
  border: none;
  ${(p) => (p.np ? "" : "box-shadow: 0px 15px 23px rgba(255,22,78,.12);")}
  ${(p) => (p.np ? `border: 1px solid ${Colors.GrayBorder};` : "")}
  padding: 1rem ${(p) => (p.np ? "1rem" : "3rem")};
  font-size: 1.1rem;
  ${(p) => (p.fw ? "width:100%;" : "")}
  ${(p) =>
    p.disabled ? "background-color: #f0f0f0 !important; cursor: default;" : ""}
  ${(p) =>
    p.flex
      ? "display: flex; justify-content: center; align-content: center; column-gap: 0.4rem"
      : ""}
      ${(p) =>
    p.flw
      ? `animation: pulse 1500ms infinite;

  @keyframes pulse {
    0% {
      box-shadow: #FF164E 0 0 0 0;
    }
    80% {
      box-shadow: #FF164E00 0 0 0 10px;
    }
    100% {
      box-shadow: #FF164E00 0 0 0 20px;
    }
  }`
      : ""}
`;

export default Button;
