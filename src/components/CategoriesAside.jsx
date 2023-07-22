import { useContext, useEffect } from "react";

import { getAllCategories } from "../api";
import { appContext } from "../context/ContextProvider";
const CategoriesAside = () => {
  const { currentCategory, setCurrentCategory, categories, setCategories } =
    useContext(appContext);
  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getAllCategories();
      const { data } = categories;
      setCategories(data);
      setCurrentCategory("All");
    };
    fetchCategories();
  }, []);
  return (
    <div className="categories-aside">
      <div className="make-aside-skicky">
        <h2>Categories</h2>
        <div className="categories-list">
          <div
            className={`category ${currentCategory === "All" ? "active" : ""}`}
            onClick={() => setCurrentCategory("All")}
          >
            All
          </div>
          {categories &&
            categories.map((category, index) => (
              <div
                className={`category ${
                  currentCategory === category ? "active" : ""
                }`}
                key={index}
                onClick={() => setCurrentCategory(category)}
              >
                {category}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesAside;
