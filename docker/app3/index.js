const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3002;

// Datos simulados
const usuarios = [
  { id: 1, nombre: "Franco Sbaffi", email: "franco@example.com" },
  { id: 2, nombre: "Ana López", email: "ana@example.com" },
  { id: 3, nombre: "Carlos Pérez", email: "carlos@example.com" },
];

const productos = [
  { id: 1, nombre: "Laptop Dell", precio: "$1200" },
  { id: 2, nombre: "Monitor LG", precio: "$300" },
  { id: 3, nombre: "Teclado Mecánico", precio: "$150" },
];

// Middleware para servir archivos estáticos
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal para servir el index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rutas API
app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.get("/productos", (req, res) => {
  res.json(productos);
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`App3 ejecutándose en http://localhost:${PORT}`);
});






