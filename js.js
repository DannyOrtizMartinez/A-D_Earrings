const numeroWhatsApp = "50683362236";


const productos = [
    { nombre: "Arete 1", precio: "₡4000", img: "Img/image1.png" },
    { nombre: "Arete 2", precio: "₡5000", img: "Img/image2.png" },
    { nombre: "Arete 3", precio: "₡2500", img: "Img/image3.png" },
    { nombre: "Arete 4", precio: "₡6000", img: "Img/image4.png" },
    { nombre: "Arete 5", precio: "₡2500", img: "Img/image5.png" },
    { nombre: "Arete 6", precio: "₡2500", img: "Img/image6.png" },
    { nombre: "Arete 7", precio: "₡3000", img: "Img/image7.png" },
    { nombre: "Arete 8", precio: "₡3000", img: "Img/image8.png" },
    { nombre: "Arete 9", precio: "₡2500", img: "Img/image9.png" },
    { nombre: "Arete 10", precio: "₡3000", img: "Img/image10.png" },
    { nombre: "Arete 11", precio: "₡2500", img: "Img/image11.png" },
    
];

const contenedor = document.getElementById("productos");

productos.forEach(producto => {
    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <img src="${producto.img}">
        <div class="info">
            <h3>${producto.nombre}</h3>
            <p class="precio">${producto.precio}</p>
        </div>
    `;

    card.onclick = () => {
        const mensaje = `Hola, me interesa comprar ${producto.nombre} por ${producto.precio}`;
        window.open(
            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`,
            "_blank"
        );
    };

    contenedor.appendChild(card);
});