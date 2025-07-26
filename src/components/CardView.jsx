import React from 'react'
import styled from "styled-components";

export const CardView = ({ route, onToggle }) => {
    return(
  <CardContainer onClick={onToggle}>
    <CardHeader>
      <span>{route.date}</span>
      <span>▼</span>
    </CardHeader>
    <PlaceList>
      {route.routes.map((place, index) => (
        <React.Fragment key={index}>
          <PlaceItem>
            <PlaceImage src={place.image} />
            <PlaceName>{place.name}</PlaceName>
          </PlaceItem>
          {index < route.routes.length - 1 && <Connector />}
        </React.Fragment>
      ))}
    </PlaceList>
  </CardContainer>
  );
}

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;

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

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom:20px;
  font-weight: 600;
`;

const PlaceList = styled.div`
  display: flex;
  align-items: center;
  justify-content:flex-start;
`;

const PlaceItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const PlaceImage = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #eee;
`;

const PlaceName = styled.span`
  color: var(--Black, #1A1A1A);
text-align: center;

/* Cap */
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 19.2px */
letter-spacing: -0.36px;
`;

const Connector = styled.div`
z-index:0;
  flex: 1;
  height: 2px;
  background: var(--400, #9B9B9B);
  margin: 0 -10px;
  transform: translateY(-10px);
`;