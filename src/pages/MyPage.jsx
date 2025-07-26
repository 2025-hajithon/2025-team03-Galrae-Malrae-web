import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import { MyPageHeader } from '../components/MyPageHeader';
import exampleimg from '../assets/exampleimg.svg';
import pencil from '../assets/pencil.svg';
import blackpencil from '../assets/blackpencil.svg';

export const MyPage = () => {
    const [selected, setSelected] = useState(true);
    const [nickName, setNickName] = useState("고양이먼지");
    const [clicked, setClicked] = useState(false);

    const [inputWidth, setInputWidth] = useState(0);
    const spanRef = useRef(null);

    const handleNickName = (e) => {
        setNickName(e.target.value);
    };


    useEffect(() => {
        if (spanRef.current) {
            setInputWidth(spanRef.current.offsetWidth + 2);
        }
    }, [nickName]);

    return (
        <>
            <MyPageHeader headerText={"마이페이지"} rightButton={true} />
            <Container>
                <img src={exampleimg} alt={"프로필 사진"} />
                <SubContainer>
                    <InputWrapper>
                        <Input
                            type="text"
                            value={nickName}
                            onChange={handleNickName}
                            disabled={!clicked}
                            style={{ width: `${inputWidth}px` }}
                            $isClicked={clicked}
                        />
                        <img 
                        src={clicked ? blackpencil : pencil}
                            alt={clicked ? "수정중" : "수정전"}
                            onClick={() => setClicked(!clicked)}
                            />
                    </InputWrapper>
                    
                    <HiddenSpan ref={spanRef}>{nickName || " "}</HiddenSpan>
                    <Intro>관광지, 문화생활을 좋아해요</Intro>
                </SubContainer>
            </Container>
            <List>
                <Select onClick={() => setSelected(true)} $isSelected={selected === true}>추천지 카드</Select>
                <Select onClick={() => setSelected(false)} $isSelected={selected === false}>방문 루트</Select>
            </List>
        </>
    );
};


const Container = styled.div`
    display: flex;
    width: 393px;
    align-items: flex-start;
    padding: 20px;
`;

const SubContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 4px;
padding-left:8px;`;

const InputWrapper = styled.div`
display: flex;
align-items: center;
gap: 8px;
`;

const Input = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0;

    color: ${props => (props.$isClicked ? '#9B9B9B' : 'var(--Black, #1A1A1A)')};
    font-feature-settings: 'liga' off, 'clig' off;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.4px;
    margin:0;
`;

const HiddenSpan = styled.span`
    position: absolute;
    visibility: hidden;
    height: auto;
    width: auto;
    white-space: nowrap;

    font-family: Pretendard;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.4px;
`;

const Intro = styled.p`
    color: var(--Black, #1A1A1A);

/* Body/M */
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 160%; /* 22.4px */
letter-spacing: -0.42px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;
const Select = styled.p`
    display: flex;
    width: 197px;
    height: 54px;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid ${props => (props.$isSelected ? 'var(--Main, #F18E2B)' : '#F2F2F2')};
    color: ${props => (props.$isSelected ? 'var(--Black, #1A1A1A)' : '#9B9B9B')};
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.4px;
`;