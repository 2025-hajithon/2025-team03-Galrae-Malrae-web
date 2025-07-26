import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import leftArrow from '../assets/leftArrow.svg';
import setting from '../assets/setting.svg';

export const MyPageHeader = ({headerText, rightButton}) =>{
    const nav = useNavigate();
    return(
        <>
            <Container>
                <img src={leftArrow} alt="왼쪽 화살표" onClick={()=>nav(-1)} />
                <Text>{headerText}</Text>
                <Image src={setting} alt="세팅" $isHidden={!rightButton} onClick={()=>nav("/setting")}/>
            </Container>
        </>
    )
}

const Container = styled.div`
top:0;
z-index:999;
display:flex;
padding: 0 20px;
height: 52px;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid #F5F5F5;
`
const Text = styled.p`
color: var(--, #0D0C0C);
text-align: center;
font-family: Pretendard;
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 27px */
letter-spacing: -0.36px;`

const Image = styled.img`
visibility: ${props => props.$isHidden ? 'hidden' : 'visible'};
pointer-events: ${props => props.$isHidden ? 'none' : 'auto'};
`