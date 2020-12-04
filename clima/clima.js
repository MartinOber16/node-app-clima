const axios = require('axios');

const getClima = async (lat, lon) => {
    let APIkey = '6a7e329ad42d8be2aa4907d12ff71f33';
    let baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;

    try {
        const resp = await axios.get(baseURL);
        return resp.data.main.temp;

    } catch (error) {
        throw new Error(`No hay resultados para lat:${lat} lon:${lon}`);
        //return {msg: `No hay resultados para lat:${lat} lon:${lon}`}
    }  
};

module.exports = {
    getClima
}