/********* BOTON CARRITO *********/

const cartButton = document.querySelector(".cart-icon");
const cartList = document.querySelector(".cart");

// Abrir carrito
cartButton.addEventListener("click", e => {
  if (!cartList.classList.contains("active")) {
    cartList.classList.toggle("active");
    cartList.style.display = "block";
    e.preventDefault(); // cuando clickee el carrito, no quiero que la página se vaya hacia arriba
  } else {
    cartList.classList.remove("active");
    cartList.style.display = "none";
    e.preventDefault();
  }
})






