// Declaración de la función constructora
class Producto {
    constructor(product, price, id, img, desc) {
        this.product = product;
        this.price = price;
        this.id = id;
        this.desc = desc;
        this.img = img;
    }
};

//Declaración de los productos
const auriLogitech = new Producto(
    "Auricular Logitech G435",
    15037,
    1,
    "https://shiftdigital.com.ar/images/Logitech%20Auric%20Inalamb%20G435%20White%20Lightspeed%20Bluetooth.jpg",
    "Logitech Auricular Bluetooth G435 White Lightspeed",
);
const auriGlobal = new Producto(
    "Auricular Global BT-Black",
    2585,
    2,
    "https://shiftdigital.com.ar/images/Global%20Auricular%20Bluetooth%20Negro%20EPBL027BLACK.jpg",
    "Global Auricular Bluetooth Negro EPBL027BLACK",
);
const auriComun = new Producto(
    "Auricular by Xiaomi GT3",
    4477,
    3,
    "https://shiftdigital.com.ar/images/Haylou%20True%20Auricular%20GT3%20Bluetooth%20Negro.jpg",
    "Haylou by Xiaomi True Auricular GT3 Bluetooth Negro",
);
const auriPro = new Producto(
    "Auricular Gaming IntCo RDH-300",
    2761,
    3,
    "https://shiftdigital.com.ar/images/TWS%20Auricular%20Gaming%20Bluetooth%20RDH-300%20negro.jpg",
    "IntCo Auricular Gaming Bluetooth RDH-300 Base recargable negro G11",
);


const listado = [];
listado.push(auriLogitech, auriGlobal, auriComun, auriPro);

for (const pListado of listado) {
    let codeCard = document.createElement("div");
    codeCard.innerHTML = `
    <img src= ${pListado.img}
        class="card-img-top" alt="${pListado.product}">
    <div class="card-body">
        <h5 class="card-title">$${pListado.price}</h5>
        <p class="card-text">${pListado.desc}</p>
        <div class="botones flex-row align-items-center">
            <button class="boton col-lg-5 addToCart" id="realizar-compra"> ¡Comprar! </button>
            <button class="boton-favorito col-lg-5"> Favoritos </button>
        </div>
    </div>
</div>
    `
    document.getElementById("cards").append(codeCard);
    codeCard.classList.add("card", "col-lg-3", "m-4", "width30rem", "productos")
};
//----------------------------------------------------------------------------------------//
//Eventos

// const carrito = document.getElementById("#carrito");
// const producto = document.getElementById("#productos");
// const vaciarCarritoBtn = document.getElementById("#vaciar-carrito");


// eventListeners();

// function eventListeners() {
//     productosSeleccionados.addEventListener(`click`, realizarCompra);
//     carrito.addEventListener(`click`, eliminarCarrito);
//     vaciarCarritoBtn.addEventListener(`clcik`, vaciarCarrito);
//     document.addEventListener(`DOMContentLoaded`, leerLocalStorage);
// }

// //añadir al carrito
// function comprarProducto() {
//     e.preventDefault();
//     if(e.target.classList.contains(`agregar-carrito`)) {
//         const producto = e.target.parentElement.parentElement;
//         leerDatosProducto(producto);
//     }
// }

// function leerDadtosProducto(product, price, img, id) {
//     // for (const pListado of listado) {
//     //     pListado.product;
//     //     pListado.price;
//     //     pListado.img;
//     //     pListado.id;
//     // }

//     insertarProducto()
// }

// function insertarProducto(producto){
//     const row = document.createElement("tr");
//     row.innerHTML =`
//         <td>
//             <img src=${pListado.img}>
//         </td>
//         <td>
//             ${pListado.product}
//         </td>
//         <td>
//             ${pListado.price}
//         </td>
//         <td>
//         <a href="#" class="borrar-producto" data-id="${pListado.id}">X</a>
//         </td>
//         `;
//         listaProductos.appendChild(row);
//         guardarProductoLocalStorage(producto);

// }

// function eliminarProducto(e) {
//     e.preventDefault();
//     let producto,
//         productoId;

//     if(e.target.classList.contains(`borrar-producto`)) {
//         e.target.parentElement.parentElement.remove();
//         producto = e.target.parentElement.parentElement;
//         productoId = pListado.id
//     }

//     eliminarProductoLocalStorage(productoId)
// }

// function vaciarCarrito() {
//     while(listaProducto.firstChild) {
//         listaProducto.removeCHild(listaProducto.firstChild)
//     }

//     vaciarLocalStorage();
//     return false;
// }

// function guardarProductoLocalStorage(producto) {
//     let producto;

//     producto = obtenerProductoLocalStorage();
//     producto.push(producto);

//     localStorage.setItem(`productos`, JSON.stringify(producto))
// }

// function obtenerProductosLocalStorage() {
//     let productoLS;

//     if(localStorage.getItem(`producto`) === null) {
//         productoLS = [];
//     }else {
//         platilloLS = JSON.parse(localStorage.getItem(`productos`));
//     }
//     return productoLS;
// }

// const comprar = document.querySelector(".boton");
// const boton = document.querySelector(".boton-prueba");

// boton.addEventListener(`click`, function() {
//     alert("Se realizo un click");
// })

// boton.addEventListener(`click`, function() {
//     console.log("Se eliminará todo el carrito")
// } )

// comprar.addEventListener(`click`, function() {
//     alert("Se eliminará todo el carrito")
// })


