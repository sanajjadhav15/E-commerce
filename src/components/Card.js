import React, { useState } from "react";
import { useProductContext } from "../context/ProductContext";
import { FaCheck } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import "../styles.css";

const Card = () => {
  const { products, addToCart, cart } = useProductContext();
  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (product) => {
    if (!addedItems.includes(product.id)) {
      addToCart(product);
      setAddedItems([...addedItems, product.id]);
    }
  };

  const isAddedToCart = (productId) =>
    cart.some((item) => item.id === productId);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg m-1 shadow-lg">
            <h3 className="text-center font-bold mb-4">{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              className="mx-auto max-h-40 object-contain"
            />
            <p className="mt-2 text-center">{product.description}</p>
            <p className="mt-2 text-center font-semibold underline">
              Price: ${product.price}
            </p>
            <p className="mt-2 text-center">Rating: {product.rating.rate}</p>
            <div className="flex justify-center items-center m-2">
              {isAddedToCart(product.id) ? (
                <p
                  className="px-3 py-1 flex flex-wrap items-center mr-2 text-green-700 bg-green-100 rounded-md"
                  disabled
                >
                  <FaCheck className="mr-2" />
                  Added
                </p>
              ) : (
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded-md flex items-center mr-2 transition-colors duration-300 hover:bg-blue-700"
                  onClick={() => handleAddToCart(product)}
                >
                  <IoCart className="mr-1" />
                  Add to cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
