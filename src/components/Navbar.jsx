import { useContext } from "react";
import { appContext } from "../context/ContextProvider";
import cartIcon from "../assets/cart.png";

const Navbar = () => {
  const { currentCategory, countCart } = useContext(appContext);
  console.log(currentCategory);
  return (
    <div className="navbar">
      <img className="logo" src="/ShopEX_icon.jpg" alt="shopEx" />
      <p className="nav-category">{currentCategory}</p>
      <div className="nav-cart">
        <img className="cartIcon" src={cartIcon} alt="CartIcon" />
        <span className="nav-cart-count">{countCart}</span>
      </div>
    </div>
  );
};

export default Navbar;
