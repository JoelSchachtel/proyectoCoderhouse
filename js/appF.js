// fetch al .json donde estan almacenados los productos.
fetch("productos.json")
    .then((res)=>res.json())
    .then (function (data) {
        const productos = data.lista
        console.log(data.lista)
        for (const prod of productos) {
            let codeCard = document.createElement("div"); //Creo un div.
            codeCard.innerHTML = `
            <img src= ${prod.img}
                class="card-img-top" alt="${prod.name}">
            <div class="card-body carts">
                <h5 class="card-title">$${prod.price}</h5>
                <p class="card-text title">${prod.name}</p>
                <div class="d-flex">
                <button class="botons shop-add-item-button" id="${prod.id}"><i class="fas fa-shopping-cart"></i></button>
                <button class="clear shop-remove-item-button" id="${prod.id}"><i class="fas fa-xmark"></i></button>
                </div>
            </div>
            `; // Asigno el HTML mediante plantilla literal.
        
          document.getElementById("cards").append(codeCard); //Asigno ese elemento a un div con id =" cards".
          codeCard.classList.add("card", "d-flex", "m-4"); //Asigno clases a ese div para darle estilos.
        }
    })

    