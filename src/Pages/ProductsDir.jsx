import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../contest/AppContext";
import { useParams } from "react-router-dom";
import { ProductDisplay, LoginPage } from "../Components/constant";
import axios from "axios";

const API_URL = "https://api.unsplash.com/photos"; // Updated to get a single photo by ID

const ProductsDir = () => {
  const { selectedProduct, setSelectedProduct } = useContext(AppContext);
  const [product, setProduct] = useState(null); // Initialize with null
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const { id } = useParams();

  useEffect(() => {
    if (selectedProduct && selectedProduct.id === id) {
      setProduct(selectedProduct);
      setLoading(false); // No need to load, data already available
    } else {
      axios
        .get(`${API_URL}/${id}`, {
          params: {
            client_id: import.meta.env.VITE_API_KEY, // Make sure the API key is correct
          },
        })
        .then((response) => {
          setProduct(response.data);
          setSelectedProduct(response.data); // Optionally update context
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setError("No Internet Connections..");
          setLoading(false);
        });
    }
  }, [id, selectedProduct, setSelectedProduct]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>; // Display error if any

  return (
    <>
      <div>
        {product ? (
          <ProductDisplay product={product} />
        ) : (
          <p>Product not found</p> // Handle case where product is null
        )}
      </div>
      <LoginPage />
    </>
  );
};

export default ProductsDir;
