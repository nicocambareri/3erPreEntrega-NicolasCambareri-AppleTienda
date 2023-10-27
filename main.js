function agregarAlCarrito (nombre, precio){
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push({nombre, precio});
    localStorage.setItem('carrito', JSON.stringify(carrito))
    alert(`El producto"${nombre}" se agrego al carrito `)

}




// ---------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', mostrarCarrito);
// Función para mostrar los producto del carrito en la página del carrito
function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let listaCarrito = document.getElementById('lista-carrito');

    listaCarrito.innerHTML = '';
    carrito.forEach((producto, index) => {
        let li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        
        // Botón para borrar el producto del carrito
        let botonBorrar = document.createElement('button');
        botonBorrar.textContent = 'Borrar';
        botonBorrar.addEventListener('click', () => {
            borrarProducto(index);
        });
        li.appendChild(botonBorrar);
        
        listaCarrito.appendChild(li);
    });
}

// Función para borrar un producto del carrito

function borrarProducto(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

function calcularTotal(carrito) {
    return carrito.reduce((total, producto) => total + producto.precio, 0);
}


// Función para completar la compra y variar el carrito
function completarCompra() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = calcularTotal(carrito);

    alert(`¡Compra completada con éxito! Gracias por su compra. Total: $${total.toFixed(2)}`);

    localStorage.removeItem('carrito'); // Vaciar el carrito
    mostrarCarrito(); // Actualizar la lista del carrito (se mostrará vacía)
}


// ---------------------------------------------------------------------------