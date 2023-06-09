import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Order = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining)
    removeFromDb(id)
  };
  const handleClearCart = () =>{
    setCart([])
    deleteShoppingCart()
  }
  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            handleRemoveFromCart={handleRemoveFromCart}
            product={product}
            key={product.id}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart 
        handleClearCart ={handleClearCart}
        cart={cart}>
            <Link to='/checkout'>
            <button className="btn-proceed">proceed checkout</button>
            </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
