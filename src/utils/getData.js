const getData = (api) => {
    return fetch(api)
        .then(response => response.json())
        .then(response => response)
        .catch(err => error);
}

export default getData;