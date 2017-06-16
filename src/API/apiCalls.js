const apiUrl ='https://serene-gorge-20513.herokuapp.com'




const API = {
    getFreeMovies:() => {
        return fetch(`${apiUrl}/movies/free`)
            .then(response => {
                if(response.ok) {
                    return response.json()
                } else {
                    throw new Error('Response was not ok');
                }
            })
            .then((data) => data.results)
    },
    getFreeShows: () => {
    return fetch(`${apiUrl}/shows/free`)
        .then(response => {
            if(response.ok) {
                return response.json()
            } else {
                throw new Error('Response was not ok');
            }
        })
        .then((data) => data.results)

    },
    searchShows: (searchTerm) => {
        return fetch(`${apiUrl}/shows/search/${searchTerm}`)
            .then(response => {
                if(response.ok){
                    return response.json()
                } else {
                    throw new Error('Show Does Not Exist')
                }
            })
            .then(data => data.results)
    },
    searchMovies: (searchTerm) => {
        return fetch(`${apiUrl}/movies/search/${searchTerm}`)
            .then(response => {
                if(response.ok){
                    return response.json()
                } else {
                    throw new Error('Show Does Not Exist')
                }
            })
            .then(data => data.results)
    },
    getSpecificShow: (showId, subscriptions) => {
        return fetch(`${apiUrl}/shows/${showId}/${subscriptions}`)
            .then(response => {
                if(response.ok){
                    return response.json()
                } else {
                    throw new Error('Show Does Not Exist')
                }
            })
}

}

export default API