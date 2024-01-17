import { useState } from "react";
import styled from "styled-components";
import Clock from "./Clock";

const Header = () => {
  return (
    <Wrapper>
      <Clock />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
