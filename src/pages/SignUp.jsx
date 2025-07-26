import {useState} from 'react';
import {Layout} from "../ui/Layout";
import styled from 'styled-components';


const SignUp = () =>{
    const [nickName, setNickName] = useState('');
    const handleNickName = (e) =>{
        setNickName(e.target.value);
    }

    return(
        <>
        <Layout>
            <div style={{padding:"24px"}}>
                <Title>닉네임을 입력해주세요.</Title>

                <Input
                type="text"
                placeholder='입력'
                value={nickName}
                onChange={handleNickName}/>
                <P>최대 10자</P>
            </div>
            <Confirm />
        </Layout>
        </>
    )
}

export default SignUp;

const Title = styled.h1`
color: #000;

/* Title/L-Bold */
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 150%; /* 36px */
letter-spacing: -0.48px;

text-align: left;
`

const Input = styled.input`
display: flex;
width: 340px;
flex-direction: column;
align-items: flex-end;
gap: 8px;
padding-left: 12px;
border-width: 0;
border-bottom: 1px solid var(--Main, #F18E2B);
&:focus{
    outline: none;
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

const P = styled.p`
color: var(--600, #6A6A6A);

/* Cap */
font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 18px */
letter-spacing: -0.36px;

text-align: left;`
