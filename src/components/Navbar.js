import React from "react";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { IoCart } from "react-icons/io5";
// import image
import image from "./image.png";

function Navbar() {
  const { cart } = useProductContext();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="sticky top-0 z-10">
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-medium">
            <Link to="/">
              <img src={image} alt="logo" className="w-[140px] h-12 inline-block" />
            </Link>
          </h1>
          <ul className="flex">
            <li className="mx-7 text-white text-xl cursor-pointer hover:scale-105 transition-transform hidden md:block">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-3 md:mx-7 text-white cursor-pointer hover:scale-105 transition-transform">
              <Link to="/cart">
                <span className="relative">
                  <IoCart className="text-2xl" />
                  <span className="bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center absolute -top-2 -right-2">
                    {totalItems}
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
