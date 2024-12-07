const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Ruta base de mock-data (montada con bind mount)
const mockDataDir = '/usr/src/app/mock-data'; 

// Leemos variables de entorno (por ejemplo APP_MODE)
const appMode = process.env.APP_MODE || 'version2.0';

app.get('/', (req, res) => {
  res.send(`<h1>App3 - Versión Compleja</h1><p>Modo: ${appMode}</p><p>Endpoints: /usuarios, /productos</p>`);
});

app.get('/usuarios', (req, res) => {
  const usuariosPath = path.join(mockDataDir, 'usuarios.json');
  if (!fs.existsSync(usuariosPath)) {
    return res.status(404).send({error: 'No se encontró usuarios.json'});
  }
  const data = fs.readFileSync(usuariosPath, 'utf-8');
  const usuarios = JSON.parse(data);
  res.send(usuarios);
});

app.get('/productos', (req, res) => {
  const productosPath = path.join(mockDataDir, 'productos.json');
  if (!fs.existsSync(productosPath)) {
    return res.status(404).send({error: 'No se encontró productos.json'});
  }
  const data = fs.readFileSync(productosPath, 'utf-8');
  const productos = JSON.parse(data);
  res.send(productos);
});

app.listen(port, () => {
  console.log(`App3 escuchando en el puerto ${port}`);
});
