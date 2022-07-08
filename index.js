const api = new axios.create({
    baseURL: "https://api.deezer.com",
    headers: {
        'Content-Type': 'application/json',
    }
})

const getSearch = async (query) => {
    // const response = await api.get('/search', {
    //     mode: 'no-cors',
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Content-Type': 'application/json',
    //     },
    //     withCredentials: true,
    //     credentials: 'same-origin',
    //     params: {
    //         q: query
    //     }
    // })

    // console.log(response);

    const res = await fetch("https://api.deezer.com/search?q=arjona", {
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    // const data = await JSON.parse(res);

    console.log(res);
}

getSearch('arjona');