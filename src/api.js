/* 
    categories endpoint : 
    https://dummyjson.com/products/categories

    single category endpoint:
    https://dummyjson.com/products/category/{categoryName}

    products endpoint : 
    https://dummyjson.com/products
*/

export async function getAllCategories() {
    try {
        const response = await fetch('https://dummyjson.com/products/categories');
        const data = await response.json();
        return { data, error: null };
    } catch (error) {
        console.log(error);
        return { data: null, error };
    }
}

export async function getProductsByCategoryAndPage(pageNO, category) {
    if (category === "All") {
        const response = await fetch(`https://dummyjson.com/products?limit=${20}&skip=${pageNO * 20}`);
        const data = await response.json();
        let obj = {
            totalPages: Number(data["total"] / 20),
            data: data
        }
        return { data: obj, error: null };
    } else {
        const response = await fetch(`https://dummyjson.com/products/category/${category}?limit=${20}&skip=${pageNO * 20}`);
        const data = await response.json();
        let obj = {
            totalPages: Number(data["total"] / 20),
            data: data,
        }
        return { data: obj, error: null };
    }
}