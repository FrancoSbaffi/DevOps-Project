#!/bin/bash
echo "Generando 100 usuarios falsos..."

### Lógica del Script
- El script toma un parámetro opcional: la cantidad de usuarios a generar (por defecto 10 si no se especifica).
- Cada usuario es un objeto JSON con un `id`, `nombre` y `email`.
- Los nombres y emails se generan aleatoriamente, evitando así datos repetidos.
- Se crea un archivo `usuarios.json` en el directorio actual, con un array de usuarios.

#### Ejemplo de uso:
```bash
./generar_usuarios.sh 20