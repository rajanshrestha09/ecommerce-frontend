import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ProductDetailComponent } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import productList from "../../product/product.js";
import {cart} from "../../product/cart.js"

function ProductDetails() {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});


  useEffect(() => {
    setProductDetails(productList.products[id - 1]);
  }, [id]);

  const addToCart = (item) => {
    cart.push(item)
  };

  return (
    <div className="my-8 h-[600px] flex justify-center items-center">
      <ProductDetailComponent
        productDetail={productDetails}
        addToCart={addToCart}
      />
    </div>
  );
}

export default ProductDetails;
