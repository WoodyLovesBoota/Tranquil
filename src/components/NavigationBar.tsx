import { useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { navState } from "../atoms";

const NavigationBar = () => {
  const [isNow, setIsNow] = useRecoilState(navState);

  const onItemClick = (num: number) => {
    setIsNow(num);
  };

  return (
    <Wrapper>
      <List>
        <Item
          onClick={() => {
            onItemClick(0);
          }}
          isnow={isNow === 0 ? "true" : "false"}
        >
          HOME
        </Item>
        <Item
          onClick={() => {
            onItemClick(1);
          }}
          isnow={isNow === 1 ? "true" : "false"}
        >
          TODO
        </Item>
        <Item
          onClick={() => {
            onItemClick(2);
          }}
          isnow={isNow === 2 ? "true" : "false"}
        >
          FOCUS
        </Item>
      </List>
    </Wrapper>
  );
};

export default NavigationBar;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

const Item = styled.h2<{ isnow: string }>`
  font-size: ${(props) => (props.isnow === "true" ? 16 : 10)}px;
  font-weight: ${(props) => (props.isnow === "true" ? 400 : 300)};
  color: ${(props) => (props.isnow === "true" ? "white" : "white")};
  letter-spacing: 1px;
  margin: 6px 0;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
