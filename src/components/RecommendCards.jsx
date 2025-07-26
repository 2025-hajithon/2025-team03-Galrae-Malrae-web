import styled from 'styled-components';

export const RecommendCards = ({places}) => {
  return (
    <>
      <PageLayout>
        <CardGrid>
      {places.map((place, index) => (
        <PlaceCard key={index}>
          <CardImg src={place.image} alt={place.placeName} />
          <TextOverlay>
            <h3>{place.placeName}</h3>
            <p>{place.date} {place.time} 방문</p>
          </TextOverlay>
        </PlaceCard>
      ))}
        </CardGrid>
      </PageLayout>
    </>
  );
}

const PageLayout = styled.div`
  height:  calc(100vh - 273px); 
  display: flex;
  flex-direction: column;
  overflow: hidden; /* 페이지 자체의 스크롤은 방지 */
`;

const CardGrid = styled.div`
  flex: 1; /* Header를 제외한 나머지 공간을 모두 차지 */
  overflow-y: auto; /* 내용이 넘칠 경우에만 세로 스크롤바를 표시 */

  display: grid;
  gap: 16px;
  padding: 16px;

  /* 스크롤바 스타일링 (선택 사항) */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
`;

const PlaceCard = styled.div`
position: relative; /* 자식 요소들을 이 카드 기준으로 배치 */
  width: 353px;
  height: 218px; /* 카드의 높이를 고정 (원하는 값으로 조절 가능) */
  border-radius: 8px;
  overflow: hidden; /* 카드의 둥근 모서리 밖으로 나가는 내용을 숨김 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const CardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지가 찌그러지지 않고 꽉 차게 표시 */
`;

const TextOverlay = styled.div`
  position: absolute; /* 다른 요소들 위에 겹치도록 설정 */
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  box-sizing: border-box; /* padding이 너비에 영향을 주지 않도록 설정 */
  color: white;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);

h3{
margin:0;
color: var(--White, #FFF);

/* Title/L-Bold */
-webkit-text-stroke-width: 0.3px;
-webkit-text-stroke-color: rgba(0, 0, 0, 0.61);
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 36px */
letter-spacing: -0.48px;
  } 
p {
margin:0;
color: var(--200, #DDD);

/* Cap */
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 19.2px */
letter-spacing: -0.36px;
  }
`;