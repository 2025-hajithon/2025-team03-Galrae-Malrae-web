import styled from 'styled-components'
import {useState} from 'react';

export const SearchInput = ({placeholderText}) =>{
    const [inputText, setInputText] = useState('');
    const handleInputText = (e) =>{
        setInputText(e.target.value);
    }

    return(
        <>
            <Input
                type="text"
                placeholder={placeholderText}
                value={inputText}
                onChange={handleInputText}/>
                <P>도움말 텍스트</P>
        </>
    )
}


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