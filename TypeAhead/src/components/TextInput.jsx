import React from "react";
import styled from 'styled-components';

const Input = styled.input`
    font-size: 1.5rem;
    padding: 0.2em;
    border-radius: 0.25em;
    color: black;
    width: 100%;
`;

const TextInput = ({searchInput, setSearchInput}) => {

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    return (
        <Input value={searchInput} onChange={handleInputChange} placeholder="Search Recipes"/>
    )
};

export default TextInput;