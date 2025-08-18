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
                try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${encodeURIComponent(searchTerm)}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            if (data.products.length === 0) {
                productList.innerHTML = "<div><img src='./sources/page-not-found.gif' alt='Not Found'/><br/><p style='text-align:center;'>No products found.</p></div>";
                moveToTopButton.style.display = "none";
                backButton.style.visibility = "visible";
            } else {
                displayProducts(data.products);
                backButton.style.visibility = "visible";
                moveToTopButton.style.display = "flex";
                result.textContent = `Found ${data.products.length} products for \"${searchTerm}\"`;
            }
        } catch (error) {
            console.error("Search failed:", error);
            productList.innerHTML = "<div><p style='text-align:center;'>An error occurred during search. Please try again.</p></div>";
        }
    }
    document.getElementById("search-input").value = "";
});

searchByIdButton.addEventListener("click", async () => {
    const searchId = searchByIdInput.value.trim();
    if (searchId) {
                try {
            const response = await fetch(`https://dummyjson.com/products/${searchId}`);
            if (!response.ok) {
                throw new Error(`Product not found or network error. Status: ${response.status}`);
            }
            const data = await response.json();
            displayProducts([data]);
            backButton.style.visibility = "visible";
            moveToTopButton.style.display = "flex";
        } catch (error) {
            console.error('Search by ID failed:', error);
            productList.innerHTML = "<div><img src='./sources/page-not-found.gif' alt='Not Found'/><br/><p style='text-align:center;'>No product found with that ID.</p></div>";
            moveToTopButton.style.display = "none";
            backButton.style.visibility = "visible";
        }
    }
    document.getElementById("searchById-input").value = "";
});

backButton.addEventListener("click", (e) => {
    e.preventDefault();
    getAllProducts();
});

async function getAllProducts(){
        try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayProducts(data.products);
        backButton.style.visibility = "hidden";
        moveToTopButton.style.display = "flex";
    } catch (error) {
        console.error('Failed to load products:', error);
        productList.innerHTML = "<div><p style='text-align:center;'>Could not load products. Please try again later.</p></div>";
    }
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