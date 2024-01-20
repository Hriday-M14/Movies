const fetchData = async () => {
    const response = await axios.get("http://www.omdbapi.com/", {
        params: {
            apikey: 'dfb436b6',
            s: ''
        }
    }); 

    console.log(response.data);
};

fetchData();

const input = document.querySelector('input');


const debounce = (func) => {
    return (...args) => {
        let timeoutId;
        if(timeoutId){
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, 1000);
    };
};


const onInput = event => {
    fetchData(event.target.value);
};


input.addEventListener('input', debounce(onInput));