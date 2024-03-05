import React, { useState } from "react";
import { Button, CustomImage } from "./index.js";
import { useNavigate } from "react-router-dom";
import {CartComponent} from "./index.js"
import {cart} from "../../product/cart.js"

function ProductDetailComponent({ productDetail, addToCart }) {
  // const navigate = useNavigate();
  const { id, name, description, price, category, image_url } = productDetail;
  return (
    <div className="bg-[#352f60]  h-[400px] sm:w-[600px] lg:w-[800px] flex justify-around  items-center shadow-inner shadow-amber-700">
      <div className="border mx-3 sm:p-4 lg:p-2 bg-white sm:h-[300px] sm:w-[300px] lg:w-[250px]">
        <CustomImage
          src={image_url}
          style={{ mixBlendMode: "multiply" }}
          className="h-[250px] w-[250px]"
        />
      </div>
      <div className="mx-auto p-2 h-[300px] flex flex-col justify-center text-white">
        <h3 className="text-xl font-bold text-amber-500">{name}</h3>
        <p className="text-sm">{description}</p>
        <p className="text-sm">${price}</p>
        <p className="text-sm">{category}</p>
        <Button className="my-8" onClick={()=>{addToCart(productDetail)}}>
          {" "}
          Add to Cart{" "}
        </Button>
      </div>
    </div>
  );
}

export default ProductDetailComponent;
