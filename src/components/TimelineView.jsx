import styled from "styled-components";
import { CardContainer } from "./CardView";

export const TimelineView = ({ route, onToggle }) => {
    return(
  <TimelineContainer onClick={onToggle}>
    <ul>
      {route.routes.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineMarker />
          <TimelineContent>
            <ContentImage src={item.image} alt={item.place} />
            <SubContainer>
                <Place>{item.name}</Place>
                <Description>{item.desc}</Description>
            </SubContainer>
            <Time>{item.time}</Time>
          </TimelineContent>
        </TimelineItem>
      ))}
    </ul>
  </TimelineContainer>
  )
;}

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-weight: 600;

  color: var(--Black, #1A1A1A);
text-align: center;
font-feature-settings: 'liga' off, 'clig' off;

/* Title/M-Bold */
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 30px */
letter-spacing: -0.4px;
`;

// -- TimelineView 스타일 --
const TimelineContainer = styled(CardContainer)`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
  }
`;

const TimelineItem = styled.li`
  display: flex;
  position: relative;
  margin-bottom: 32px;
`;

const TimelineMarker = styled.div`
  &::after {
    content: '';
    position: absolute;
    top: 6px; left: 0px;
    width: 12px; height: 12px;
    border-radius: 50%;
    background-color: #f39c12; 
    z-index: 1;
  }
`;

const TimelineContent = styled.div`
  display: flex;
align-items: flex-start;
gap: 12px;
align-self: stretch;
`;
const Time = styled.p` color: var(--400, #9B9B9B);
text-align: right;

/* Cap */
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 19.2px */
letter-spacing: -0.36px;`;
const Place = styled.h3`color: var(--Black, #1A1A1A);
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 24px */
letter-spacing: -0.32px;
margin: 0px;`;
const Description = styled.p` color: var(--Black, #1A1A1A);
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
letter-spacing: -0.32px;
margin: 0px;`;
const ContentImage = styled.img` width: 120px;
height: 80px;`;

const SubContainer = styled.ul`
display: flex;
flex-direction: column;
text-align:left`