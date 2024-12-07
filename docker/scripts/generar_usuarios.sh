#!/bin/bash

CANTIDAD=${1:-10}
MOCK_DATA_DIR="./mock-data"

if [ ! -d "$MOCK_DATA_DIR" ]; then
    echo "La carpeta mock-data no existe."
    exit 1
fi

USUARIOS_FILE="$MOCK_DATA_DIR/usuarios.json"

echo "[" > $USUARIOS_FILE

for (( i=1; i<=$CANTIDAD; i++ ))
do
  NOMBRE="Usuario${i}Test"
  EMAIL="usuario${i}@falso.com"
  if [ $i -eq $CANTIDAD ]; then
    echo "  {\"id\": $i, \"nombre\": \"$NOMBRE\", \"email\": \"$EMAIL\"}" >> $USUARIOS_FILE
  else
    echo "  {\"id\": $i, \"nombre\": \"$NOMBRE\", \"email\": \"$EMAIL\"}," >> $USUARIOS_FILE
  fi
done

echo "]" >> $USUARIOS_FILE

echo "Generados $CANTIDAD usuarios falsos en $USUARIOS_FILE"
