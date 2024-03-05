import React, { useId } from "react";
import { CustomImage } from "./index";

function ProductComponent({ img, price, name, category }) {
  const id = useId();
  return (
    <div className="border p-2 h-[325px] w-[250px] flex flex-col justify-center items-center bg-white shadow-2xl">
      <div className="h-[200px] w-[150px] ">
        <CustomImage src={img} style={{mixBlendMode: "multiply"}} className="h-[200px] w-[150px]" />
      </div>
      <div className="text-black py-3">
        <h3 className=" text-sm text-center">{category}</h3>
        <h2 className="text-base text-center">{name}</h2>
        <p className="text-sm text-center">${price}</p>
      </div>
    </div>
  );
}

export default ProductComponent;
