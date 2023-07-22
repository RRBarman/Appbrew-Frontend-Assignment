## Appbrew | Frontend Assignment

This is a solution to the Frontend Assignment provided by <b>Appbrew</b>.

### Solution link <a href="https://appbrew-frontend-assignment.vercel.app/">Appbrew_Assignment_Solution</a>

### Assignment Problem Statement

---

Objective:

Your task is to develop a product listing page for an e-commerce platform, 'ShopEx'. The page is divided into two main sections: on the left, a list of categories, and on the right, a dynamic display of products relevant to the selected category. The page will interact with specific APIs hosted at '[dummyjson.com](http://dummyjson.com/)' to fetch and display data.

Detailed Description:

Your goal is to design and develop a responsive product listing page with a specific layout. The product listing page should effectively display product details and seamlessly integrate with the specified APIs.

The layout of the page should be as follows:

- **Left Section:** This section should display a vertical list of product categories fetched from `https://dummyjson.com/products/categories`. Upon clicking a category, the right section should dynamically update to show the corresponding products. In addition to all the categories being returned by the API, you need to show a default All category. This category is selected by default and shows all the products.
- **Right Section:** This section shows the products belonging to the selected category in a grid.
  - For each category, the products can be fetched from `https://dummyjson.com/products/category/{categoryName}`.
  - All products can be fetched from `https://dummyjson.com/products`
  - Each product card should contain the product image, title, price, customer ratings, and an option to add the product to a shopping cart. The product card width is 320px

Key aspects to cover:

1. **API Interaction:** Use the provided APIs to fetch data for both the categories and products. Implement the page such that it fetches and displays 20 products at a time from the selected category, and supports pagination or infinite scrolling to load more products.
2. **Interactivity:** Ensure smooth interactivity between the left and right sections of the page. Selecting a category should immediately update the right section with the relevant products.
3. **Integration with Shopping Cart:** The user should be able to add products to a shopping cart. The development of add to cart is not part of this project, but you have to ensure that the add to cart function is defined and is called when user clicks on the add to cart button.
4. **Error Handling:** Implement proper error handling to manage situations when the API is down or returns an error.
5. **Website basics:** The page title and the favicon should be updated to “ShopEx”
6. **Testing:** Thoroughly test the product listing page to identify and fix any bugs.

Technical Requirements:

- Frontend: HTML, CSS, React
- API: The provided '[dummyjson.com](http://dummyjson.com/)' APIs

Resources:

- API Documentation: `https://dummyjson.com/docs/products`
