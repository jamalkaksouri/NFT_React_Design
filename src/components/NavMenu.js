import styled from "styled-components";
import { FiHome } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { BiStore } from "react-icons/bi";
import Colors from "../assets/Colors";
import { useLocation, useNavigate } from "react-router-dom";

const NavMenuEl = styled.div`
  display: flex;
  background-color: rgb(255, 255, 255, 0.01);
  position: absolute;
  bottom: 0;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 10%;
  backdrop-filter: blur(50px);
`;

const Link = styled.a`
  font-size: 1.7rem;
  ${(p) => (p.active ? `color:${Colors.Primary};` : "")}
  position: relative;
  cursor: pointer;

  ::before {
    ${(p) => (!p.active ? "display:none" : "")}
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 50%;
    margin-left: 50%;
    transform: translateX(-50%);
    background-color: ${Colors.Primary};
    animation: pulsenav 1000ms infinite;
    @keyframes pulsenav {
      0% {
        box-shadow: #ff164e 0 0 0 0;
      }
      75% {
        box-shadow: #ff164e00 0 0 0 5px;
      }
    }
  }
`;

export default function NavMenu() {
  const nav = useNavigate();
  const { pathname } = useLocation();
  return (
    <NavMenuEl>
      <Link
        active={pathname === "/"}
        onClick={() => {
          nav("/");
        }}
      >
        <FiHome />
      </Link>
      <Link
        active={pathname === "/store" || pathname === "/product"}
        onClick={() => {
          nav("/store");
        }}
      >
        <BiStore />
      </Link>
      <Link>
        <AiOutlineUser />
      </Link>
    </NavMenuEl>
  );
}
