import React, { useState } from "react";

const TextInput = ({searchString, setSearchString}) => {

    const handleTextChange = (e) => {
        setSearchString(e.target.value);
    }
    
    return (
        <>
            <input type="text" value={searchString} onChange={handleTextChange}/>
        </>
    )
};

export default TextInput;