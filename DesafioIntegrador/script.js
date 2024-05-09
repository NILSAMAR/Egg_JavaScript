document.addEventListener("DOMContentLoaded", function () {
    // Paso 1: Agregar evento click para el botón "Agregar a Favoritos"
    document.querySelectorAll('.add-to-favorites-btn').forEach(button => {
        button.addEventListener('click', function () {
            const product = this.parentNode;
            addToFavorites(product);
        });
    });

    // Paso 2: Implementar función para agregar productos a favoritos
    function addToFavorites(product) {
        const productId = product.getAttribute('data-id');
        const productName = product.querySelector('.product-name').textContent;
        const productPrice = product.querySelector('.product-price').textContent;
        const productToAdd = { id: productId, name: productName, price: productPrice };

        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(productToAdd);
        localStorage.setItem('favorites', JSON.stringify(favorites));

        displayFavorites();
    }

    // Paso 3: Implementar función para mostrar los productos favoritos
    function displayFavorites() {
        const favoritesContainer = document.querySelector('#favorites');
        favoritesContainer.innerHTML = ''; // Limpiar el contenedor antes de mostrar los favoritos
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.forEach(product => {
            const favoriteItem = document.createElement('div');
            favoriteItem.textContent = `${product.name} - ${product.price}`;
            favoritesContainer.appendChild(favoriteItem);
        });
    }

    // Paso 4: Al cargar la página, mostrar los productos favoritos si los hay
    displayFavorites();
});