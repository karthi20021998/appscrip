import { useState, useEffect } from "react";

import Header from "../Header";
import ProductCard from "../ProductCard";

import "./index.css";

const Home = () => {
  const [productsList, setProductsList] = useState([]);
  const [activeButtonId, setActiveButtonId] = useState("");

  const fetchFakeStoreApi = async () => {
    const url = "https://fakestoreapi.com/products";
    try {
      const apiResponse = await fetch(url);
      const data = await apiResponse.json();
      setProductsList(data);
    } catch (error) {
      console.log(`Failed to fetch products: ${error}`);
    }
  };

  useEffect(() => {
    fetchFakeStoreApi();
  }, []);

  const toggleIsFavorite = (id) => setActiveButtonId(id);

  return (
    <>
      <Header />
      <div className="products-overview-container">
        <h3 className="products-overview-title">Discover our products</h3>
        <p className="products-overview-text">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <ul className="total-products-container">
        {productsList.map((eachProduct) => (
          <ProductCard
            key={eachProduct.id}
            productDetails={eachProduct}
            toggleIsFavorite={toggleIsFavorite}
            isLiked={activeButtonId === eachProduct.id}
          />
        ))}
      </ul>
    </>
  );
};

export default Home;
