import React, { useEffect } from "react";
import { Button } from "./index";
import { cart } from "../../product/cart";

function CartComponent({ items, removeCart }) {
  // console.log(items);

  return (
    <div className="w-[640px] text-white mx-auto">
      <ul className="w-full h-[500px] flex flex-col justify-start items-end">
        <li className=" flex justify-between items-center">
          <p className="mx-4 w-48 text-lg font-bold uppercase text-amber-700">
            Items
          </p>
          <p className="mx-4 w-20 text-lg font-bold uppercase text-amber-700">
            Price
          </p>
          <p className="mx-2 w-16 text-center text-lg font-bold uppercase text-amber-700">
            Delete
          </p>
        </li>
        {items?.map((item) =>
        item? (
          <li key={item.id} className=" flex justify-around my-2">
            <p className="mx-4 w-48 text-sm">{item.name}</p>
            <p className="mx-4 w-20 text-sm">${item.price}</p>
            <div className="mx-2 w-16">
              <Button
                className="w-[30px] h-[30px] my-auto bg-transparent  flex items-center"
                onClick={() => {removeCart(item)}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="20px"
                  height="20px"
                  fill="rgb(245, 258,120)"
                  className=" m-auto my-auto"
                >
                  {" "}
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
              </Button>
            </div>
          </li>
        ): null)}
      </ul>
    </div>
  );
}

export default CartComponent;
