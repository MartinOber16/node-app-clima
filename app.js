// yargs permite obtener directamente los parametros cuando no hay comandos
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/*lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
        clima.getClima(resp.lat, resp.lng)
            .then(resp =>{
                console.log(resp);
            });
    });*/

const getInfo = async (direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.dir} es ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};
 
getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log );