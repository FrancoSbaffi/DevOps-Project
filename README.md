# Proyecto Integrador (Rama Staging)

Bienvenid@ a la rama **staging**, el escalón más bajo en la cadena de desarrollo de este proyecto. Acá es donde tiramos todas las ideas, prototipos, experimentos y pruebas locas que se nos ocurran, sin miedo a romper nada, porque justamente para eso existe: es nuestro taller de prueba y error, el “laboratorio” donde vemos qué funciona y qué no.

## ¿Por qué "la rama más baja"?

En este flujo de trabajo, **staging** es como el subsuelo de un gran edificio:  
- Por encima, hay pisos más “presentables” (como `develop` o `master`), donde la cosa ya está más pulida.  
- En cambio acá, en `staging`, nos damos la libertad de ensayar cualquier cambio sin la presión de tenerlo prolijo ni terminado.  
- Imaginate un galpón lleno de chatarra, piezas sueltas, prototipos, ensayos y un sinfín de ideas en estado bruto. Así es `staging`.

## ¿Qué hacemos acá?

- **Experimentar a lo grande:**  
  Podemos agregar nuevos servicios (quizás un `app3` improvisado), modificar el `nginx.conf` las veces que queramos, cambiar volúmenes, bind mounts, imágenes, variables de entorno, todo sin problemas.

- **Probar configuraciones inestables:**  
  Si algo no funciona, no importa. Lo dejamos igual. Por ahí más adelante nos sirve. Si algo funciona, copado, lo podemos “ascender” a la rama `feature/nueva-funcionalidad` para desarrollarlo mejor o pulirlo con más detalle.

- **Decidir el destino de las ideas:**  
  Las cosas que en `staging` demuestran potencial —ese código que “funca” bien, esa configuración que parece prometedora— se llevan a `feature/nueva-funcionalidad` para ser mejoradas y eventualmente, si todo sale bien, incorporarlas a entornos más arriba en la pirámide (quizás `develop` y luego `master`).

## ¿Y qué pasa con lo que no sirve?

Acá viene lo interesante:  
- En `staging` no eliminamos las cosas que no funcionan. Las dejamos ahí por si algún día nos inspiran o nos sirven para otro experimento futuro.  
- Esta es la gracia: `staging` no tiene la presión de ser prolijo ni útil ahora, sino de ser un espacio creativo donde lo que no resultó hoy, quizás mañana sí.

## Resumen

- **staging = el subsuelo experimental:** probamos, testeamos y ensayamos sin miedo.  
- Lo que sirve: asciende a `feature/nueva-funcionalidad` para desarrollarlo a fondo.  
- Lo que no sirve: se queda, por si las dudas, porque nunca se sabe cuándo puede venir bien.

En definitiva, la rama `staging` es el lugar perfecto para que, como único desarrollador, puedas volcar todas tus ideas, jugar con configuraciones, probar nuevas imágenes Docker, ajustar el `docker-compose.yml` una y otra vez, y todo eso sin tocar ni afectar el código más “serio” de las ramas superiores. 

