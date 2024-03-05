import React from "react";
import Image from "./CustomImage";

function CardCategory({ chidren, src }) {
  return (
      <div className=" border-2 text-white rounded-md shadow-md sm:w-[250px] h-[200px] px-2 py-0 flex justify-center items-center">
        <div>
            <Image src={src} height="250px" width="250px" className="bg-white rounded-md" />
        </div>
        <div className="ms-2">
            <h3 className="font-bold text-center ">{chidren}</h3>
            <p className="font-medium text-center ">Collection</p>
        </div>
      </div>
  );
}

export default CardCategory;
