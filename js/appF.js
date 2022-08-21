// Fetch al .json donde estan almacenados los productos - Se crean las cards de la Store.
fetch("productos.json")
  .then((res) => res.json())
  .then(function (data) {
    const productos = data.lista;
    //console.log(data.lista)
    for (const prod of productos) {
      let codeCard = document.createElement("div"); //Creo un div.
      codeCard.innerHTML = `
            <img src= ${prod.img}
                class="card-img-top img-fluid" alt="${prod.name}">
            <div class="card-body">
                <h5 class="card-title">${prod.price}</h5>
                <p class="card-text title">${prod.name}</p>
                <a class="botons agregar-carrito no-seleccionable" data-id="${prod.id}">¡BUY!</a>
            </div>
            `; // Asigno el HTML mediante plantilla literal.

      document.getElementById("cards").append(codeCard); //Asigno ese elemento a un div con id ="cards".
      codeCard.classList.add("card", "d-flex", "m-3"); //Asigno clases a ese div para darle estilos.
    }
  });

// Añadir el producto al carrito
class Carrito {
  comprarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains(`agregar-carrito`)) {
      const productoLocal = e.target.parentElement.parentElement;
      this.leerDatoProducto(productoLocal);
    }
  }

  // Obtiene los datos de los productos
  leerDatoProducto(productoLocal) {
    let infoProducto = {
      img: productoLocal.querySelector(`img`).src,
      name: productoLocal.querySelector(`p`).textContent,
      price: productoLocal.querySelector(`h5`).textContent,
      id: productoLocal.querySelector("a").getAttribute(`data-id`),
      cantidad: 1,
    };
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (productoLS) {
      if (productoLS.id === infoProducto.id) {
        productosLS = productoLS.id;
      }
    });
    if (productosLS === infoProducto.id) {
      Swal.fire({
        //SweetAlert mensaje de error.
        icon: "error",
        title: "Este producto ya está en tu carrito",
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      this.insertarCarrito(infoProducto);
    }
  }

  // Plantilla literal para insertar los productos que se clickean al carrito
  insertarCarrito(infoProducto) {
    let row = document.createElement(`tr`);
    row.innerHTML = `
      <td>
        <img src="${infoProducto.img}" style="width: 50%;">
      </td>
      <td>${infoProducto.name}</td>
      <td>${infoProducto.price}</td>
      <td>
        <a href="#" class="borrar-producto fa fa-times-circle" id="a-id" data-id="${infoProducto.id}"></a>
      </td>
    `;
    listaCarrito.appendChild(row);
    this.guardarProductosLocalStorage(infoProducto);
  }

  //Eliminar el producto del carrito
  eliminarProducto(e) {
    e.preventDefault();
    let producto, productoID;
    if (e.target.classList.contains("borrar-producto")) {
      e.target.parentElement.parentElement.remove();
      producto = e.target.parentElement.parentElement;
      productoID = producto.querySelector("a").getAttribute("data-id");
    }
    this.eliminarProductoLocalStorage(productoID);
    this.calcularTotal();
  }

  // Guarda los productos en el local storage
  guardarProductosLocalStorage(producto) {
    let productos;
    productos = this.obtenerProductosLocalStorage();
    productos.push(producto);
    localStorage.setItem(`productos`, JSON.stringify(productos));
  }

  // Obtiene los productos que estan en el localStorage
  obtenerProductosLocalStorage() {
    let productoLS;

    if (localStorage.getItem(`productos`) === null) {
      productoLS = [];
    } else {
      productoLS = JSON.parse(localStorage.getItem(`productos`));
    }
    return productoLS;
  }

  //Elimina los productos del localStorage
  eliminarProductoLocalStorage(productoID) {
    let productosLS;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (productoLS, index) {
      if (productoLS.id === productoID) productosLS.splice(index, 1);
    });

    localStorage.setItem(`productos`, JSON.stringify(productosLS));
  }

  //Lee todos los productos en localStorage y los imprime en el carrito.
  leerLocalStorage() {
    let productosLS;
    let contadorCarrito;
    contadorCarrito = document.getElementById("contador")
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (infoProducto) {
      let row = document.createElement(`tr`);
      row.innerHTML = `
        <td>
          <img src="${infoProducto.img}" style="width: 50%;">
        </td>
        <td>${infoProducto.name}</td>
        <td>${infoProducto.price}</td>
        <td>
          <a href="#" class="borrar-producto fa fa-times-circle" id="a-id" data-id="${infoProducto.id}"></a>
        </td>
      `;
      listaCarrito.appendChild(row);
    });
  }

  //Funcion para vaciar todo el LS
  vaciarLocalStorage() {
    localStorage.clear();
  }

  //Si el carrito está vacío, sale una alerta de error. Si hay al menos 1 producto, procesa la compra en otra pantalla.
  procesarPedido(e) {
    e.preventDefault();
    if (this.obtenerProductosLocalStorage().length === 0) {
      Swal.fire({
        //SweetAlert mensaje de error.
        icon: "error",
        title: "Tu carrito está vacío.",
        timer: 2500,
        showConfirmButton: false,
      });
    } else {
      location.href = "compra.html";
    }
  }

  // Recorro el localstorage para imprimir los productos seleccionados en el formulario.
  leerLocalStorageCompra() {
    let productosLS;
    // let cantidad = document.getElementById("cantidad").value;
    productosLS = this.obtenerProductosLocalStorage();
    productosLS.forEach(function (infoProducto) {
      let row = document.createElement(`tr`);
      row.innerHTML = `
        <td>
          <img src="${infoProducto.img}" style="width: 30%;">
        </td>
        <td>${infoProducto.name}</td>
        <td>${infoProducto.price}</td>
        <td>
          <input type="number" class="form-control cantidad form-cant" id="cantidad" min="1" value=${infoProducto.cantidad}>
        </td>
        <td>${infoProducto.price * infoProducto.cantidad}</td>
        <td>
          <a href="#" class="borrar-producto fa fa-times-circle" id="a-id" data-id="${
            infoProducto.id
          }"></a>
        </td>
      `;
      listaCompra.appendChild(row);
    });
  }

  //Calculo el total, subtotal e IVA de lo comprado y lo imprimo en el formulario.
  calcularTotal() {
    let productoLS;
    let total = 0,
      igv = 0,
      subtotal = 0;
    productoLS = this.obtenerProductosLocalStorage();
    for (let i = 0; i < productoLS.length; i++) {
      let element = Number(productoLS[i].price * productoLS[i].cantidad);
      total = total + element;
    }

    igv = parseInt(parseFloat(total * 0.21)).toFixed(2);
    subtotal = parseInt(parseFloat(total - igv)).toFixed(2);
    total = parseInt(parseFloat(total)).toFixed(0);

    document.getElementById("subtotal").innerHTML = "$ " + subtotal;
    document.getElementById("igv").innerHTML = "$ " + igv;
    document.getElementById("total").value = "$ " + total;
  }
}
