const getData = () => {
    return fetch('https://test-8c9d4-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json()
        })
}

export default getData