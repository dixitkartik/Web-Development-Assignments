

// 1. Filter products by category
function filterByCategory(products, category) {

    return products.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
    );
}


// 2. Filter products by maximum price
function filterByPrice(products, maxPrice) {

    return products.filter(product =>
        product.price <= maxPrice
    );
}


// 3. Generate product summary
function summarizeProducts(products) {

    const totalProducts = products.length;

    const totalStock = products.reduce(
        (total, product) => total + product.stock, 0
    );

    const averagePrice = totalProducts === 0
        ? 0
        : products.reduce(
            (total, product) => total + product.price, 0
        ) / totalProducts;

    return {
        totalProducts,
        totalStock,
        averagePrice
    };
}


// Export all functions
export {
    filterByCategory,
    filterByPrice,
    summarizeProducts
};