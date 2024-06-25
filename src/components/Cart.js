import React from "react";
import { useProductContext } from "../context/ProductContext";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useProductContext();


  return (
    <div className="container min-h-screen mx-auto p-4 dark:bg-gray-600">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-50">
        Shopping Cart
      </h2>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-50 text-lg mb-6">Your cart is empty</p>
          <button className="bg-blue-500 text-white text-lg px-2 py-1 rounded-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-900">
            <Link to="/">Continue shopping</Link>
          </button>
        </div>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="border-b py-4 flex items-center">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-contain dark:object-cover dark:hover:object-contain rounded-full mr-4 hover:w-24 hover:h-24 transition-all duration-300 ease-in-out"
                />
              )}
              <div className="flex-grow">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-50">
                  {item.title}
                </h3>
                <p className="text-gray-800 font-[450] dark:text-gray-50">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              <div className="flex items-center">
                <button
                  className="bg-gray-200 text-gray-700 px-2 rounded h-6 w-6 hover:bg-gray-300  transition-all"
                  onClick={() => decreaseQuantity(item)}
                >
                  -
                </button>
                <span className="px-3 text-gray-700 dark:text-gray-50">{item.quantity}</span>
                <button
                  className="bg-gray-200 text-gray-700 px-1 h-6 w-6 rounded hover:bg-gray-300  transition-all"
                  onClick={() => increaseQuantity(item)}
                >
                  +
                </button>
                <button
                  className="ml-4 bg-red-500 text-white p-2 rounded-full h-8 w-8 text-center hover:bg-red-600"
                  onClick={() => removeFromCart(item.id)}
                >
                  <MdDelete />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <div className="m-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2 dark:text-gray-50">
            Total items:{" "}
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </h2>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-50">
            Total price: $
            <span className="underline">
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </span>
          </h2>

          <button
            className="bg-blue-500 text-white px-2 py-1 rounded-md mt-4 hover:bg-blue-700 transition-colors duration-300 dark:bg-blue-700 dark:hover:bg-blue-900 dark:text-gray-50"
            onClick={() => {
              alert("Thank you for shopping with us!");
              clearCart();
            }}
          >
            Buy now
          </button>

          <button
            className="bg-red-500 text-white px-2 py-1 rounded-md mt-4 mb-7 ml-4 hover:bg-red-700 transition-colors duration-300 dark:text-gray-50"
            onClick={clearCart}
          >
            Clear cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
