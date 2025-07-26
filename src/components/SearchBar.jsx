import styled from 'styled-components';
import Color from "../ui/Color";
import {useState} from 'react';
import searchicon from "../assets/searchicon.svg";
import xicon from "../assets/xicon.svg";

export const SearchBar = ({placeholderText}) =>{
    const [inputText, setInputText] = useState('');
    const [isFocus, setIsFocus] = useState(false);
    const handleInputText = (e) =>{
        setInputText(e.target.value);
    }
    const handleSearch = () =>{
        console.log(inputText);
    }
    const handleKeyDown = (e) =>{
        if(e.key === 'Enter'){
            handleSearch();
        }
    }


    return(
        <> 
            <SearchContainer>
                <Input
                    type="text"
                    placeholder={placeholderText}
                    value={inputText}
                    onChange={handleInputText}
                    onKeyDown={handleKeyDown}
                    onFocus={() => setIsFocus(true)}
                    onBlur={()=>setIsFocus(false)}/>
                {isFocus ? 
                <Image src={xicon} alt={"지우기 아이콘"} onMouseDown={() => setInputText('')}/>
                :<Image src={searchicon} alt={"돋보기 아이콘"} onClick={handleSearch}/>}
            </SearchContainer>
        </>
    )
}

const SearchContainer = styled.div`
position: relative;
display: flex;
align-items: center;
width: 353px;
margin: 0 auto;
`

const Input = styled.input`
display: flex;
width: 353px;
flex-direction: column;
align-items: flex-end;
gap: 8px;
padding: 8px 40px 8px 12px; 
border-width: 0;
border-bottom: 1px solid ${Color['gray-200']};
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
letter-spacing: -0.48px;`

const Image = styled.img`
position:absolute;
right:12px;
cursor:pointer;
`