import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const appContext = createContext(); // store context result
const ContextProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("All");
  const [products, setProducts] = useState(null);
  const [countCart, setCountCart] = useState(0);
  const value = {
    categories,
    setCategories,
    products,
    setProducts,
    currentCategory,
    setCurrentCategory,
    countCart,
    setCountCart,
  };
  return <appContext.Provider value={value}>{children}</appContext.Provider>;
};
// Prop validation using PropTypes
ContextProvider.propTypes = {
  //if the prop is a react node then we use node type as propTypes.node .isRequired(optional)
  children: PropTypes.node.isRequired, // children if passed as prop in react we use node type as prop for children
};
export default ContextProvider;
