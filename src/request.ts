
export async function fetchProducts(searchInput: string) {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchInput}`);
        return response.json();
    } catch (error) {
        return error;
    }
}