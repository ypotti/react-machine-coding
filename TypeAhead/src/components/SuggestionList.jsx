import React from "react";

const SuggestionList = ({isLoading, list}) => {
    return (
        <>
            {isLoading ? <p>Loading..</p> : null}
            {(!isLoading && list && list.length>0) ? (
                <ul>
                    {list.map(item => (
                        <p key={item.id}>{item.name}</p>
                    ))}
                </ul>
            ) : null}
            {!isLoading && list && list.length===0 ? (
                <p>No result Found</p>
            ) : null}
        </>
    )
};

export default SuggestionList;