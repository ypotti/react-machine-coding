import React, { useCallback, useEffect, useState } from "react";
import TextInput from "./TextInput";
import SuggestionList from "./SuggestionList";
import { debounce, fetchData } from "../utils";
import HistoryPanel from "./HistoryPanel";

const TypeAheadComponent = () => {
    const [searchInput, setSearchInput] = useState("");
    const [list, setList] = useState(null);
    const [historyList, setHistoryList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(()=>{
        if(searchInput===""){
            setList(null);
            setIsLoading(false);
            setError("");
            return;
        }
        debouncedFilterListByKeyword(searchInput);
    },[searchInput])

    const filterListByKeyword = (searchInput) => {
        setIsLoading(true);
        fetchData(searchInput)
            .then(result => {
                if(result.error){
                    setError("Unexpected Error");
                    setList(null);
                }else{
                    setError("");
                    setList(result.data);
                }   
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }

    const debouncedFilterListByKeyword = useCallback(debounce(filterListByKeyword, 300) , []);

    const onSuggestionSelected = (value) => {
        alert(value);
        if(!historyList.includes(value)){
            let modifiedHistoryList = historyList.length >= 6 ? historyList.slice(-5) : historyList;
            setHistoryList([...modifiedHistoryList, value]);
            console.log(modifiedHistoryList);
        }
        setSearchInput("");
    }

    const onHistoryItemSelected = (item) => {
        setSearchInput(item);
    };

    return(
        <div style={{width: '50vw'}}>
            <HistoryPanel historyList={historyList} onHistoryItemSelected={onHistoryItemSelected}/>
            <TextInput searchInput={searchInput} setSearchInput={setSearchInput}/>
            <SuggestionList isLoading={isLoading} error={error} list={list} onSuggestionSelected={onSuggestionSelected}/>
        </div>
    )
};

export default TypeAheadComponent