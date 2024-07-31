import React, { useCallback, useEffect, useState } from "react";
import TextInput from "./TextInput";
import SuggestionList from "./SuggestionList";
import { debounce, fetchData } from "../utils";

const TypeAheadComponent = () => {
    const [searchString, setSearchString] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [list, setList] = useState(null);
    const [error, setError] = useState("");

    useEffect(()=>{
        if(searchString === ""){
            setList(null);
            setError("");

            return
        };
        filterListbyKeyword(searchString);
    },[searchString]);

    let filterListbyKeyword = useCallback(debounce(
        (searchString) =>{
            setIsLoading(true);
            fetchData(searchString)
                .then(result => {
                    if(result.isError){
                        setError("Error in Fetching Data");
                    }else{
                        setList(result.data);
                        setError("");
                    }
                })
                .finally(()=>{
                    setIsLoading(false);
                })        
        },300
    ),[]);

    return (
        <>
            <TextInput searchString={searchString} setSearchString={setSearchString}/>
            {/* <HistoryPanel />   */}
            <SuggestionList isLoading={isLoading} list={list}/>
            {error ? <p>{error}</p> : null}
        </>
    )
};

export default TypeAheadComponent;