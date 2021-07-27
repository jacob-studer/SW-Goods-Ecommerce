import React from "react";
import ProductList from "../components/ProductList";
import Jumbotron from "../components/Jumbotron";

const Home = () => {
  return (
    <div className="container">
      <Jumbotron />
      <ProductList />
    </div>
  );
};

export default Home;
