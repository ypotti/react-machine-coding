export const fetchData = async (keyWord) => {
    let url = `https://dummyjson.com/recipes/search?q=${keyWord}`;

    try {
        const response = await fetch(url);

        if(!response.ok) throw new Error("Error");

        const result = await response.json();

        return{
            data: result.recipes,
            isError: false
        }
    } catch (error) {
        console.log(error, "fetchData -> Utils.js");
        return{
            isError: true,
            error: error
        }
    }
}

export const debounce = (cb, delay=300) => {
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            cb(...args);
        },delay);
    }
}