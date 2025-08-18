const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchByIdInput = document.getElementById("searchById-input");
const searchByIdButton = document.getElementById("searchById-button");
const moveToTopButton = document.querySelector(".move-to-top");
const backButton = document.querySelector(".back-button");
const result = document.getElementById("result-text");

searchButton.addEventListener("click", async () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
        const data = await response.json();
        console.log("Search results:", data.products);
        if (data.products.length === 0) {
            productList.innerHTML = "<div><img src='./sources/page-not-found.gif' alt='Not Found'/><br/><p style='text-align:center;'>No products found.</p></div>";
            moveToTopButton.style.display = "none";
            backButton.style.visibility = "visible";
        } else {
            displayProducts(data.products);
            backButton.style.visibility = "visible";
            moveToTopButton.style.display = "flex";
            result.textContent = `Found ${data.products.length} products for "${searchTerm}"`;
        }
    }
    document.getElementById("search-input").value = "";
});

searchByIdButton.addEventListener("click", async () => {
    const searchId = searchByIdInput.value.trim();
    if (searchId) {
        const response = await fetch(`https://dummyjson.com/products/${searchId}`);
        const data = await response.json();
        console.log("Search by ID result:", data);
        if (!data) {
            productList.innerHTML = "<div><img src='./sources/page-not-found.gif' alt='Not Found'/><br/><p style='text-align:center;'>No products found.</p></div>";
            moveToTopButton.style.display = "none";
            backButton.style.visibility = "visible";

        } else {
            displayProducts([data]);
            backButton.style.visibility = "visible";
            moveToTopButton.style.display = "flex";
        }
    }
    document.getElementById("searchById-input").value = "";
});

async function getAllProducts(){
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    displayProducts(data.products);
    backButton.style.visibility = "hidden";
    moveToTopButton.style.display = "flex";
}

function displayProducts(products) {
    productList.innerHTML = ""; 
    result.textContent = "";
    products.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
            <img src="${product.images[0]}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>Price: $${product.price}</p>
            <p>${product.description}</p>
        `;
        productList.appendChild(productItem);
    });
}

getAllProducts();