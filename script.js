// Arreglo de productos (datos dinámicos)
let productos = [
    {
        nombre: "Laptop",
        precio: 1200,
        descripcion: "Laptop para uso universitario"
    },
    {
        nombre: "Mouse",
        precio: 20,
        descripcion: "Mouse inalámbrico"
    }
];

// Referencia al elemento UL
const lista = document.getElementById("listaProductos");

// Función para renderizar productos usando plantillas
function renderizarProductos() {
    let plantilla = "";

    productos.forEach(producto => {
        plantilla += `
            <li>
                <strong>${producto.nombre}</strong><br>
                Precio: $${producto.precio}<br>
                ${producto.descripcion}
            </li>
        `;
    });

    lista.innerHTML = plantilla;
}

// Renderizar automáticamente al cargar la página
renderizarProductos();

// Evento del botón para agregar productos
document.getElementById("btnAgregar").addEventListener("click", () => {

    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = prompt("Ingrese el precio del producto:");
    let descripcion = prompt("Ingrese una descripción:");

    // Crear nuevo producto con los datos ingresados
    let nuevoProducto = {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion
    };

    // Agregar al arreglo
    productos.push(nuevoProducto);

    // Volver a renderizar la lista
    renderizarProductos();
});
