import React, { useState } from 'react';
import styled from 'styled-components';
import { CardView } from '../components/CardView';
import { TimelineView } from '../components/TimelineView';

// 1. Mock 데이터: 각 여정(날짜)별로 상세 경로 데이터를 포함
const mockRoutes = [
  {
    id: 1,
    date: '2025. 07. 23',
    routes: [
      { name: '홍대입구역', image: 'https://picsum.photos/seed/r1p1/80/80', desc: '어디를 갔어요', time: '14:00' },
      { name: 'EXIT 홍대', image: 'https://picsum.photos/seed/r1p2/80/80', desc: '어디를 갔어요', time: '14:30' },
      { name: '모노블럭', image: 'https://picsum.photos/seed/r1p3/80/80', desc: '어디를 갔어요', time: '16:00' },
      { name: '자유인들', image: 'https://picsum.photos/seed/r1p4/80/80', desc: '어디를 갔어요', time: '19:00' },
    ]
  },
  {
    id: 2,
    date: '2025. 07. 24',
    routes: [
      { name: '강남역', image: 'https://picsum.photos/seed/r2p1/80/80', desc: '어디를 갔어요', time: '13:00' },
      { name: '카카오프렌즈', image: 'https://picsum.photos/seed/r2p2/80/80', desc: '어디를 갔어요', time: '14:00' },
    ]
  },
];

// --- 부모 컴포넌트 ---
export const ItineraryPage = () => {
  // 2. 현재 선택된 카드의 id를 저장할 state (초기값 null: 아무것도 선택되지 않음)
  const [selectedId, setSelectedId] = useState(null);

  // 3. 카드를 클릭했을 때 실행될 함수
  const handleSelect = (id) => {
    // 이미 선택된 카드를 다시 클릭하면 선택 해제, 아니면 해당 id로 선택
    setSelectedId(prevId => (prevId === id ? null : id));
  };

  return (
    <PageLayout>
      {mockRoutes.map((route) => (
        <div key={route.id}>
          {/* 4. 조건부 렌더링 */}
          <CardView route={route} onToggle={() => handleSelect(route.id)} />
          {selectedId === route.id && <TimelineView route={route} onToggle={() => handleSelect(route.id)} />}
        </div>
      ))}
    </PageLayout>
  );
};



// --- Styled Components ---

const PageLayout = styled.div`
  height:  calc(100vh - 273px); 
  display: flex;
  flex-direction: column;
  overflow: auto; /* 페이지 자체의 스크롤은 방지 */
`;