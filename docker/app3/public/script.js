document.addEventListener("DOMContentLoaded", async () => {
  const usuariosList = document.getElementById("lista-usuarios");
  const productosList = document.getElementById("lista-productos");

  try {
    const usuariosResponse = await fetch("/usuarios");
    const productosResponse = await fetch("/productos");

    const usuarios = await usuariosResponse.json();
    const productos = await productosResponse.json();

    usuarios.forEach((usuario) => {
      const li = document.createElement("li");
      li.textContent = `👤 ${usuario.nombre} - ${usuario.email}`;
      usuariosList.appendChild(li);
    });

    productos.forEach((producto) => {
      const li = document.createElement("li");
      li.textContent = `🛒 ${producto.nombre} - ${producto.precio}`;
      productosList.appendChild(li);
    });
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
});


  