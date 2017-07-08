
const results = [
    {
        title: 'hello from freeMovie Mock!'
    }
];
const API = {
    getFreeMovies: () => {
        return new Promise((resolve, reject) => {
            process.nextTick(
                () => resolve(results)
            )
        })
    }
};

export default API