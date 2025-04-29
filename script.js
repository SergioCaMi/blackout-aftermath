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



fs.readdir("subestaciones", (err, files) => {
  if (err) {
    console.log("Error al leer el directorio", err);
  } else {
    files.forEach((file) => {
      const filePath =  path.join(__dirname, "subestaciones", file);
      const stationInfo = fs.readFileSync(filePath, "utf-8").trim();
      const data = stationInfo.split(",");
      const result = +data[0] - (+data[1]);
      if (result>10000){
        console.log(`⚡ Subestación con fallo detectada: ${file}`);
        console.log(`Lecturas: ${data}`);
        console.log(`Diferencia: ${data[0] - data[1]}`); 
    }
    });
  }
});

