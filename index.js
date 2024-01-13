const fetchData = async () => {
    const response = await axios.get("http://www.omdbapi.com/", {
        params: {
            apikey: 'dfb436b6',
            s: 'Avengers'
        }
    }); 

    console.log(response.data);
};

fetchData();