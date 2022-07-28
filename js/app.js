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
    4,
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
    <div class="card-body carts">
        <h5 class="card-title">$${pListado.price}</h5>
        <p class="card-text title">${pListado.desc}</p>
        <button class="botons agregar-carrito" id="${pListado.id}"><i class="fas fa-shopping-cart"></i></button>
    </div>
    `
    
    document.getElementById("cards").append(codeCard);
    codeCard.classList.add("card", "d-flex", "m-4",)
    
};
//----------------------------------------------------------------------------------------//
//Eventos



