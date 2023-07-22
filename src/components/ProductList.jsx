import { useContext, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { getProductsByCategoryAndPage } from "../api.js";
import { appContext } from "../context/ContextProvider";
import svgimage from "../assets/Rolling-1s-200px (2).svg";
const ProductList = () => {
  const { products, setProducts, currentCategory } = useContext(appContext);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function dataBycategory() {
      console.log("look here", page);
      setLoading(true);
      const { data, error } = await getProductsByCategoryAndPage(
        Number(page),
        currentCategory
      );
      if (!error) {
        const {
          data: { products: porductsData },
          totalPages,
        } = data;
        setTotalPages(totalPages);
        // console.log(porductsData);
        setProducts(porductsData);
        setLoading(false);
      } else {
        // disply error message to user
        alert(error);
        console.log(error);
      }
    }
    dataBycategory();
  }, [currentCategory, page]);
  useEffect(() => {
    setPage(0);
  }, [currentCategory]);
  return (
    <div className="product-list">
      {products && !loading && (
        <>
          <div className="products-card-container">
            {products.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))}
          </div>
          <div className="page-buttons">
            <button disabled={page === 0} onClick={() => setPage(page - 1)}>
              Prev
            </button>
            <span>{page + 1}</span>
            <button
              disabled={page >= totalPages - 1}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </>
      )}
      {loading && (
        <p className="loading">
          <img src={svgimage} alt="Loading..." />
        </p>
      )}
    </div>
  );
};

export default ProductList;
