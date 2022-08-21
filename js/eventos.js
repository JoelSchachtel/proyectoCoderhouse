const carro = new Carrito();
const carrito = document.getElementById("cart");
const productos = document.getElementById("cards");
const listaCarrito = document.querySelector("#lista-carrito tbody");
const terminarCompra = document.getElementById(`procesar-pedido`)

cargarEventos();

function cargarEventos() {
  productos.addEventListener(`click`, (e) => {
    carro.comprarProducto(e);
  });

  carrito.addEventListener(`click`, (e) => {
    carro.eliminarProducto(e);
  });

  document.addEventListener("DOMContentLoaded", carro.leerLocalStorage());

  terminarCompra.addEventListener(`click`, (e)=>{carro.procesarPedido(e)})

}
