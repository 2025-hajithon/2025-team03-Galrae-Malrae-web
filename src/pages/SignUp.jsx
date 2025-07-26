import {useState} from 'react';
import {Layout} from "../ui/Layout";
import { FooterButton } from '../components/FooterButton';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Color from "../ui/Color";
import erroricon from "../assets/erroricon.svg";
import xicon from "../assets/xicon.svg";
import checkicon from "../assets/checkicon.svg";


const SignUp = () =>{
    const nav = useNavigate();
    const [nickName, setNickName] = useState('');
    const [errormessage, setErrormessage] = useState(false);
    const handleNickName = (e) =>{
        setNickName(e.target.value);
        if (errormessage) {
            setErrormessage(false);
        }
    }

    const handleSubmit = () => {
        if (!nickName.trim()) {
            setErrormessage(true);
            return;
        }
        console.log(`서버로 전송할 닉네임: ${nickName}`); // 나중에 서버에 전달해야함
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return(
        <>
        <Layout>
            <Wrapper>
                <div>
                    <Title>닉네임을 입력해주세요.</Title>
                
                    <InputContainer>
                        <Input
                            type="text"
                            placeholder='입력'
                            value={nickName}
                            onChange={handleNickName}
                            onKeyDown={handleKeyDown}
                            $isError={errormessage}/>
                    </InputContainer>
                    {errormessage ? (
                        <ErrorMessage>올바르지 않은 닉네임입니다.</ErrorMessage>
                    ) : (
                        <P>최대 10자</P>
                    )}
                </div>
                <FooterButton onClick={handleSubmit} name={"확인"} />
            </Wrapper>
        </Layout>
        </>
    )
}

export default SignUp;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 50vh;
  min-height: 100vh;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.h1`
color: #000;

/* Title/L-Bold */
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 36px */
letter-spacing: -0.48px;
padding:48px 24px 24px 24px;

text-align: left;
`
const InputContainer = styled.div`
position: relative;
display: flex;
align-items: center;
width: 353px;
padding:0 24px;

`

const Input = styled.input`
display: flex;
width: 340px;
flex-direction: column;
align-items: flex-end;
gap: 8px;
padding: 12px;
border-width: 0;
border-bottom: 1px solid ${props => props.$isError ? '#FF5555' : Color['gray-400']};
caret-color: var(--Main, #F18E2B);

&:focus{
    outline: none;
    border-bottom: 1px solid ${props => props.$isError ? '#FF5555' : 'var(--Main, #F18E2B)'};
    color: ${Color.black};
};

color: var(--400, #9B9B9B);
/* Body/M */
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
letter-spacing: -0.48px;
`

const Image = styled.img`
position:absolute;
right:12px;
cursor:pointer;`

const P = styled.p`
color: var(--600, #6A6A6A);
padding:0 24px;

/* Cap */
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 18px */
letter-spacing: -0.36px;

text-align: left;`

const ErrorMessage = styled(P)`
    color: ${Color.error};
    padding:0 24px;
`;