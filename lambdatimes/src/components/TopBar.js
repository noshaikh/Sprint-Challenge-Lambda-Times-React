import React from "react";
import styled from "styled-components";
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    .top-bar .container {
      width: 1280px;
    }
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const LeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const ContainCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  :hover {
    text-decoration: underline;
  }
`;

const CenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
`;

const ContainChild = styled.span`
  margin-right: 0;
`;

const ContainRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const RightSpan = styled.div`
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <Top>
      <Container>
        <ContainerLeft>
          <LeftSpan> TOPICS</LeftSpan>
          <LeftSpan> SEARCH</LeftSpan>
        </ContainerLeft>
        <ContainCenter>
          <CenterSpan>GENERAL</CenterSpan>
          <CenterSpan>BROWNBAG</CenterSpan>
          <CenterSpan>RANDOM</CenterSpan>
          <CenterSpan>MUSIC</CenterSpan>
          <ContainChild>ANNOUNCEMENTS</ContainChild>
        </ContainCenter>
        <ContainRight>
          <RightSpan> LOG IN</RightSpan>
        </ContainRight>
      </Container>
    </Top>
  );
};

export default TopBar;
