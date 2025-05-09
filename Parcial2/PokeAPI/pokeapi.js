const fs = require(`fs`);
const path = require(`path`);
 
//Es para buscar el json
console.log(__dirname);
console .log(__filename);
 
//Guarda el json en la variable ruta
const ruta = path.join(__dirname, '_pokeapi.json');
let contenido = fs.readFileSync(ruta, 'utf-8');
let ObjetoJs = JSON.parse(contenido);
 
ObjetoJs.results.forEach(Pokemon => { console.log(`Nombre: ${Pokemon.name}`);console.log(`URL : ${Pokemon.url}`); });