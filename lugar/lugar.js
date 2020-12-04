// https://www.npmjs.com/package/axios
const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    let lugar = encodeURI(direccion); // Para formatear a tipo URL
    let APIkey = '6a7e329ad42d8be2aa4907d12ff71f33';
    let baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${lugar}&appid=${APIkey}`;
    
    // si se necesita enviar info en el headers
    /*const instance = axios.create({
      baseURL: 'https://some-domain.com/api/',
      timeout: 1000,
      headers: {'X-Custom-Header': 'foobar'}
    });*/
    
    try {
        const resp = await axios.get(baseURL);
        const data = resp.data;
        const dir = data.name + ', ' + data.sys.country;
        const lat = data.coord.lat;
        const lng = data.coord.lon;

        return {
            dir,
            lat,
            lng
        };
    } catch (error) {
        throw new Error(`No hay resultados para ${direccion}`);
        // return { msg: `No hay resultados para ${direccion}`}
    }  
}    

module.exports = {
    getLugarLatLng
}
