const numeroWhatsApp = "50683362236";

// Aquí mueves el número de stock manualmente de cada arete
const productos = [
    { nombre: "Arete 1", precio: "₡4000", img: "Img/image1.png", stock: 1 },
    { nombre: "Arete 2", precio: "₡2500", img: "Img/image2.png", stock: 1 },
    { nombre: "Arete 3", precio: "₡2500", img: "Img/image3.png", stock: 0 }, // Mostrará Stock: 0 en la pantalla y bloqueará clic
    { nombre: "Arete 4", precio: "₡2500", img: "Img/image4.png", stock: 1 },
    { nombre: "Arete 5", precio: "₡2500", img: "Img/image5.png", stock: 1 },
    { nombre: "Arete 6", precio: "₡2500", img: "Img/image6.png", stock: 1 },
    { nombre: "Arete 7", precio: "₡3000", img: "Img/image7.png", stock: 1 },
    { nombre: "Arete 8", precio: "₡3000", img: "Img/image8.png", stock: 1 },
    { nombre: "Arete 9", precio: "₡2500", img: "Img/image9.png", stock: 1 },
    { nombre: "Arete 10", precio: "₡3000", img: "Img/image10.png", stock: 1 },
    { nombre: "Arete 11", precio: "₡2500", img: "Img/image11.png", stock: 1 }
];

const contenedor = document.getElementById("productos");
contenedor.innerHTML = ""; // Limpieza de seguridad

productos.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("card");

    const disponible = producto.stock >= 1;

    // Si el stock es 0, desactivamos visualmente la tarjeta
    if (!disponible) {
        card.classList.add("deshabilitado");
    }

    // Estructura HTML dinámica que inyecta el stock debajo del precio en tiempo real
    card.innerHTML = `
        <img src="${producto.img}">
        <div class="info">
            <h3>${producto.nombre}</h3>
            <p class="precio">${producto.precio}</p>
            <p class="${disponible ? 'stock' : 'agotado'}">
                Stock: ${producto.stock}
            </p>
        </div>
    `;

    // Acción al dar clic
    card.addEventListener("click", () => {
        if (producto.stock < 1) {
            return; // Bloqueo total si el stock es 0
        }

        const mensaje = `Hola, me interesa comprar ${producto.nombre} por ${producto.precio}`;
        window.open(
            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`,
            "_blank"
        );
    });

    contenedor.appendChild(card);
});