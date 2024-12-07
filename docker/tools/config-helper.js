const fs = require("fs");

const config = {
  modo: process.env.APP_MODE || "default",
  puerto: process.env.PORT || 3002,
};

fs.writeFileSync("./config.json", JSON.stringify(config, null, 2));
console.log("Archivo config.json generado.");
