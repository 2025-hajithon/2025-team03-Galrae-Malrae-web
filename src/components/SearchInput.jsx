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