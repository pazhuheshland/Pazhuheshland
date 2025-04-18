const products = [
    { id: 1, name: 'گیفت هولدر عکس تدی', image: './IMG_20240914_115547_556.jpg', description: '' },
    { id: 2, name: 'گیفت شمع ابر', image: './IMG_20240914_115342_145.jpg', description: '' },
    { id: 3, name: 'گیفت نوزاد', image: './IMG_20240916_113255_382.jpg', description: '' },
    { id: 4, name: 'گیفت هولدر عکس تدی', image: './IMG_20240914_115547_556.jpg', description: '' },
    { id: 5, name: 'تابلوی دکوراتیو', image: './InShot_۲۰۲۴۱۱۰۵_۲۰۰۱۲۷۹۰۷.jpg', description: '' },
    { id: 6, name: 'تابلو سنتی', image: './InShot_۲۰۲۴۱۱۰۵_۱۹۱۹۳۹۶۳۰.jpg', description: '' },
    { id: 7, name: 'تابلو سنتی', image: './InShot_۲۰۲۴۱۱۰۵_۱۹۱۸۵۵۹۶۴.jpg', description: '' },
    { id: 8, name: 'تابلو دکواتیو', image: './InShot_۲۰۲۴۱۱۰۵_۱۹۲۱۳۳۲۹۱.jpg', description: '' },
    { id: 9, name: 'زیر لیوانی رزین اپوکسی', image: './a9.jpg', description: '' },
    { id: 10, name: 'زیر لیوانی رزین اپوکسی', image: './a10.jpg', description: '' },
    { id: 11, name: 'استند اسم با تم وینی پو', image: './a1.jpg', description: '' },
    { id: 12, name: 'گیفت هولدر عکس تدی', image: './a3.jpg', description: '' },
    { id: 13, name: 'اسم محصول', image: './a4.jpg', description: '' },
    { id: 14, name: 'وارمر تدی', image: './a5.jpg', description: '' },
    { id: 15, name: 'گیفت هولدر عکس تدی', image: './a6.jpg', description: '' },
    { id: 16, name: 'گیفت دندونی', image: './a7.jpg', description: '' },
    { id: 17, name: 'استند اسم', image: './a8.jpg', description: '' },
    { id: 17, name: ' دیوارکوب', image: './v2.jpg', description: '' },
     
];

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name && product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

function displayProducts(products) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) {
        console.error('خطا: عنصر با id="products-container" در HTML یافت نشد.');
        return;
    }
    productsContainer.innerHTML = '';

    if (products.length === 0) {
        productsContainer.innerHTML = '<p>محصولی یافت نشد.</p>';
        return;
    }

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;
        productDiv.appendChild(productImage);

        const productName = document.createElement('h3');
        productName.textContent = product.name;
        productDiv.appendChild(productName);

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description || 'بدون توضیحات';
        productDiv.appendChild(productDescription);

        productsContainer.appendChild(productDiv);
    });
}

// نمایش همه محصولات در ابتدا
displayProducts(products);
