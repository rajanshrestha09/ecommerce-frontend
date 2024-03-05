import React, { useCallback, useEffect, useState } from "react";
import { cart } from "../../product/cart.js";
import { CartComponent } from "../components";

function Cart() {

  const [cartItems, setCartItems] =  useState(cart)

  // console.log(cartItems);
  const removeFromCart = useCallback((item)=>{
      setCartItems(cart.splice(item, 1));
      // console.log(cart);
  },[cartItems]);

  return (
    <div className="h-[70vh] my-16">
      <CartComponent items={cart} removeCart={removeFromCart} />
    </div>
  );
}

export default Cart;
