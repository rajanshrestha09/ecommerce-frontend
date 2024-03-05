import React from "react";
import { CardCategory } from "../components";
import { Link } from "react-router-dom";
import category from "../../product/category/category";

function Categories() {
  const catergoriesLists = category.categoryList;
  // console.log(catergoriesLists);
  // catergoriesLists.map((list) => {
  //   console.log(list);
  // });
  return (
    <div className="m-4 flex flex-col items-center">
      <h1 className=" my-8 text-white font-bold text-lg text-center">
        Categories
      </h1>
      <div className="w-[600px] flex flex-col gap-y-4 justify-center items-center">
        {catergoriesLists?.map((list) => (
          <Link key={list.id}>
            <CardCategory key={list.id} chidren={list.category} src={list.image_url} />
          </Link>
        ))}
       
      </div>
    </div>
  );
}

export default Categories;

