const products = [
    {
        name: "t-shirts",
        price: 100,
        rating: 4.5,
        image: "https://i.etsystatic.com/35853422/r/il/1d8ca1/3932813826/il_570xN.3932813826_3hrp.jpg"
    },
    {
        name: "Leggings",
        price: 200,
        rating: 4.8,
        image: "https://media.istockphoto.com/id/1432433654/photo/the-legging-shown-by-the-mannequin.jpg?s=612x612&w=0&k=20&c=hAZABvaFeelvdcKTVn2Uyj0cUd7IFAnw8HWgD6M4TtU="
    },
    {
        name: "Kurta",
        price: 150,
        rating: 4.2,
        image: "https://media.istockphoto.com/id/689354884/photo/mannequins-dressed-in-indian-salwar-kameez-women-dress-in-front-of-retail-clothes-shop-or.webp?s=1024x1024&w=is&k=20&c=xwr5lrbZ5IAhnSebdNv3NoiwNMGUdMXDkFEdW4XSUCs="
    },
];

const productList = document.getElementById("productList");

function renderProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.alignItems = "center";
        li.style.marginBottom = "10px";

        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        img.style.width = "100px";
        img.style.height = "100px";
        img.style.marginRight = "10px";

        const details = document.createElement("div");
        details.innerHTML = `
            <strong>${product.name}</strong><br>
            Price: $${product.price}<br>
            Rating: ${product.rating}
        `;

        li.appendChild(img);
        li.appendChild(details);
        productList.appendChild(li);
    });
}

function sortProducts() {
    const criteria = document.getElementById("sort").value;
    products.sort((a, b) => a[criteria] - b[criteria]);
    renderProducts();
}

renderProducts();
