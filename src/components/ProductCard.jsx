import { useContext } from "react";
import PropTypes from "prop-types";
import { appContext } from "../context/ContextProvider";
const ProductCard = ({ product }) => {
  const { setCountCart } = useContext(appContext);
  function handleCart() {
    setCountCart((prev) => prev + 1);
    alert("Added to cart!");
  }
  return (
    <div className="product-card">
      <img src={product?.thumbnail} alt={product?.title} />
      <p className="product-title">{product.title}</p>
      <div className="info-group">
        <p className="product-price">{product.price} Rs.</p>
        <p className="product-rating">{product.rating} 🌟</p>
      </div>
      <button onClick={handleCart}>Add to cart</button>
    </div>
  );
};

const laptopPropsValidation = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  discountPercentage: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  brand: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

ProductCard.propTypes = {
  product: PropTypes.shape(laptopPropsValidation).isRequired,
};

export default ProductCard;
