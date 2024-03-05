import React, { useEffect, useState } from "react";
import { ProductComponent } from "../components";
import productList from "../../product/product";
import { useNavigate, Link } from "react-router-dom";

function ProducList() {
  const [listOfProduct, setProduct] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProduct(productList.products);
  }, [productList]);

  // console.log(listOfProduct);

  return (
    <div className="m-4 flex flex-col justify-center items-center">
      <div className=" my-12 text-white font-bold text-lg text-center">
        <h2>Product List</h2>
      </div>
      <div className="mb-12 sm:w-[400px]  md:w-[600px] lg:w-[900px] xl:w-[1200px] flex flex-wrap gap-8 justify-center items-center">
        {listOfProduct?.map((product) => (
          <Link to={"/productdetails/" + product.id} key={product.id}>
            <ProductComponent
              img={product.image_url}
              name={product.name}
              category={product.category}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProducList;
