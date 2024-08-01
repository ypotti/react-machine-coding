import React from "react";
import styled from 'styled-components';

const ListContainer = styled.div`
    position: relative;
    width: 100%;
`;

const ListContent = styled.div`
    position: absolute;
    top: 0px; 
    width: 100%;
    border: 1px solid gray;
    border-radius: 0.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    background-color: white;
    max-height: 400px;
    overflow-y: auto;
`;

const UL = styled.ul`
    padding: 0px;
    margin: 0px;
`;

const LI = styled.li`
    list-style-type: none;
    padding: 0.3em 1em;
    font-size: 1rem; 
    cursor: pointer;

    &:hover{
        background-color: rgb(150, 175, 207);
    }

    &:active{
        background-color: rgb(150, 175, 207);
    }
`;

const Message = styled.p`
    padding: 0.3em 1em;
    font-size: 1rem; 
`;

const SuggestionList = ({isLoading, error, list, onSuggestionSelected}) => {
    
    
    if(isLoading || error){
        return (
            <ListContainer>
                <ListContent>
                    {isLoading ? <Message>Loading...</Message> : null}
                    {error ? <Message>{error}</Message> : null}
                </ListContent>
            </ListContainer>
        )
    }
    
    if(!list) return null;

    if(list.length === 0 ){
        return (
            <ListContainer>
                <ListContent>
                    <Message>No Matches Found</Message>
                </ListContent>
            </ListContainer>
        )
    }

    return(
        <ListContainer>
            <ListContent>
                <UL>
                    {list.map(item => (
                        <LI key={item.id} onClick={() => onSuggestionSelected(item.name)}>{item.name}</LI>
                    ))}
                </UL>   
            </ListContent>
        </ListContainer>
    )
};

export default SuggestionList;