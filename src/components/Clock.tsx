import { useEffect, useState } from "react";
import styled from "styled-components";
import { padInt } from "../utils";

const Clock = () => {
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [isAm, setIsAm] = useState(false);

  useEffect(() => {
    setHour(new Date().getHours() <= 12 ? new Date().getHours() : new Date().getHours() - 12);
    setMin(new Date().getMinutes());

    const interval = setInterval(() => {
      let now = new Date();
      setHour(now.getHours() <= 12 ? now.getHours() : now.getHours() - 12);
      setMin(now.getMinutes());
      setIsAm(now.getHours() <= 12 ? true : false);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Ampm>{isAm ? "AM" : "PM"}</Ampm>
      <TimeBox>
        <TimeNumber>{padInt(hour)}</TimeNumber>
        <TimeNumber>{padInt(min)}</TimeNumber>
      </TimeBox>
    </Wrapper>
  );
};

export default Clock;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-left: auto;
`;

const Ampm = styled.h2`
  font-size: 16px;
  margin-right: 5px;
  font-weight: 100;
`;

const TimeBox = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TimeNumber = styled.h2`
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
`;

const Divider = styled.h2``;
