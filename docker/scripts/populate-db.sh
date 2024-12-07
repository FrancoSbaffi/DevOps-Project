#!/bin/bash

echo "Simulando la inserción de datos..."
curl -X POST http://localhost:3002/usuarios -d '{"nombre":"Nuevo Usuario","email":"nuevo@example.com"}'
curl -X POST http://localhost:3002/productos -d '{"nombre":"Nuevo Producto","precio":999}'
echo "Datos insertados exitosamente."
