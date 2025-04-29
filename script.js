// ¡El país te necesita!
// Para la carpeta subestaciones:
//     leer todos los ficheros
//         Para cada archivo, leer su contenido
//             Cacular la diferencia entre lecturas
//             Si la diferencia es de 15.000, ese archivo es el de la torre que ha caído.
//             Lo mostramos por pantalla.

const fs = require("fs");
const path = require("path");
const directory = path.join(__dirname, "subestaciones");



fs.readdir(directory, (err, files) => {
  if (err) {
    console.log("Error al leer el directorio", err);
  } else {
    files.forEach((file) => {
      const filePath = path.join(directory, file);
      const stationInfo = fs.readFileSync(filePath, "utf-8");
      const data = stationInfo.split(",");
      const value1 = data[0].trim();
      const value2 = data[1].trim();
      const result = +value1 - (+value2);
      if (result>10000){
        console.log(`La estación que ha fallado es la ${file} con una pérdida de ${result} unidades`);
    }
    });
  }
});

