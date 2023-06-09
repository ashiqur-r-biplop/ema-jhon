import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart ,handleClearCart, children }) => {
  // const {cart} = props;
  // console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    // product.quantity || 1;
   /*  if(product.quantity === 0){
      product.quantity = 1;
    } */
    total = total + product.quantity * product.price;
    shipping = shipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  const tax = (total * 5) / 100;
  const grandTotal = parseInt(total + tax + shipping);
  return (
    <div className="cart">
      <h4>oder summary</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h6>Grand Total: ${grandTotal}</h6>
      <button onClick={handleClearCart} className="btn-clear-cart">
        <span>Clear Cart</span> 
        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
      </button>
      {
        children
      }
    </div>
  );
};

export default Cart;
