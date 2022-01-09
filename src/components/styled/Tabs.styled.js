import { useState } from "react";
import styled from "styled-components";
import Colors from "../../assets/Colors";

const TabsEl = styled.div`
  width: 100%;
`;
const TitlesContainer = styled.span`
  display: flex;
  justify-content: space-around;
  margin: 0 1.5rem;
  padding: 0 1rem;
`;
const Title = styled.span`
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  ${(p) => (p.active ? "" : `color:${Colors.Gray};`)}
  ${(p) => (p.active ? `font-weight:600;` : "")}

 ::after {
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
  }
`;
const Content = styled.div`
  margin: 0 0.5rem;
  margin-top: 1rem;
`;

export default function Tabs({ tabs }) {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  return (
    <TabsEl>
      <TitlesContainer>
        {tabs.map((tab) => {
          return (
            <Title
              key={tab.id}
              onClick={() => {
                if (currentTab.id !== tab.id) {
                  setCurrentTab(tab);
                }
              }}
              active={currentTab.id === tab.id}
            >
              {tab.title}
            </Title>
          );
        })}
      </TitlesContainer>
      <Content>{currentTab.content}</Content>
    </TabsEl>
  );
}
