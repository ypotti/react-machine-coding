import React from "react";
import styled from 'styled-components';

const Panel = styled.div`
    width: 100%;
    margin: 1rem 0rem;
    padding: 1rem; 
    border-radius: 1rem;
    border: 2px solid #daa804;
    background-color: #f7d76dc7;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

const Item = styled.div`
    background-color: #daa804;
    border-radius: .2em;
    padding: 0.2em;
    color: #3f3c3c;
    cursor: pointer;
`;

const HistoryPanel = ({historyList, onHistoryItemSelected}) => {

    if(historyList.length === 0){
        return null;
    }

    return(
        <Panel>
            <span>Recent Searches: </span>
            {historyList.map((item,index) => (
                <Item key={index} onClick={()=>onHistoryItemSelected(item)}>{item}</Item>
            ))}
        </Panel>
    )
};

export default HistoryPanel;