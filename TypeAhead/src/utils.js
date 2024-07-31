export const fetchData = async (searchString) => {
    const url = `https://dummyjson.com/recipes/search?q=${searchString}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error');
        }
        const data = await response.json();

        return {
            isError: false,
            data: data.recipes
        };
    } catch (error) {
        console.error(error, "fetchData -> Utils.js");
        return {
            isError: true,
        };
    }
};

export function debounce (cb, delay=300){
    let timer;
    return(...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            cb(...args);
        }, delay);
    }
}