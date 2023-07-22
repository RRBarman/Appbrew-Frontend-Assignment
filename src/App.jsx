import "./App.css";
import CategoriesAside from "./components/CategoriesAside";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="main">
        {/* left side */}
        <CategoriesAside />
        {/* right side */}
        <ProductList />
      </section>
    </div>
  );
}

export default App;
