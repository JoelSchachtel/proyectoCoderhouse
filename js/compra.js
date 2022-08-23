const compra = new Carrito();
const listaCompra = document.querySelector(`#lista-compra tbody`);
const carritos = document.getElementById("carritos");
const volverIndex = document.getElementById("volver-index");
const procCompra = document.getElementById("procesar__compra");
const cliente = document.getElementById("cliente");
const correo = document.getElementById("correo")

cargarEventos();

function cargarEventos() {
  document.addEventListener(
    "DOMContentLoaded",
    compra.leerLocalStorageCompra()
  );

  carritos.addEventListener("click", (e) => compra.eliminarProducto(e));

  compra.calcularTotal();

  procCompra.addEventListener(`click`, finalizar);

  carritos.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carritos.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });
}

function finalizar(e) {
  e.preventDefault();
  // const cliente = getElementById("cliente").value;
  // const correo = getElementById("correo").value;

  if (compra.obtenerProductosLocalStorage().length === 0) {
    Swal.fire({
      //SweetAlert mensaje de error.
      icon: "error",
      title: "El carrito esta vacío. Por favor seleccione un producto.",
      timer: 1500,
      showConfirmButton: false,
    }).then(function () {
      window.location = "index.html";
    })
  } else if(cliente.value === "" || correo.value === "" ){
    Swal.fire({
      //SweetAlert mensaje de error.
      icon: "error",
      title: "Los dos campos son obligatorios.",
      timer: 1500,
      showConfirmButton: false,
    })
  } else {
    Swal.fire({
      //SweetAlert mensaje de error.
      icon: "success",
      title: "Gracias por confiar en nosotros.",
      footer: "Será redirigido a la página principal.",
      timer: 3500,
      showConfirmButton: false,
    })

    setTimeout(() => {
      compra.vaciarLocalStorage();
      window.location = "index.html"
    }, 3000)
  }
}



