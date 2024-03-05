import React, { useEffect, useState } from "react";
import { Button, CustomImage } from "../components";
import { useNavigate } from "react-router-dom";
import { cart } from "../../product/cart";
import product from "../../product/product";

function Home() {
  const [products, setProduct] = useState([])  
  useEffect(()=>{
    const productItem = product.products.filter((item)=>{return item.price < 35});
    setProduct(productItem)
  },[product])
  const navigate = useNavigate();
  const handleShopButton = () => {
    navigate("/productList");
  };
  return (
    <div className="h-full mb-24 ">
      <div className=" opacity-75 sm:grid sm:grid-cols-1 sm:grid-row-1 lg:grid lg:grid-cols-3 lg:grid-rows-2">
        <div className="row-span-2 sm:hidden lg:flex flex-col justify-center items-center lg:col-span-2 bg-[url('images/home1.jpeg')] sm:h-[400px] lg:h-[600px] bg-cover bg-no-repeat ">
          <h2 className="text-4xl text-white text-center pb-4">
            Unveil Endless Choices, Shop Now
          </h2>
          <Button
            className="text-lg px-2 py-1 rounded-lg w-24 bg-amber-500 hover:bg-amber-700"
            onClick={handleShopButton}
          >
            Shop
          </Button>
        </div>
        <div className="sm:col-span-3 sm:opacity-100 lg:col-span-1 sm:flex flex-col justify-center items-center bg-[url('images/home2.jpg')] bg-cover bg-no-repeat sm:h-[400px] lg:h-[300px]">
          <h2 className="lg:hidden text-4xl bg-white m-2 opacity-70 text-center text-amber-900 pb-4">
            Unveil Endless Choices, Shop Now
          </h2>
          <Button
            className="lg:hidden text-lg px-2 py-1 rounded-lg w-24 bg-amber-500 hover:bg-amber-700"
            onClick={handleShopButton}
          >
            Shop
          </Button>
        </div>
        <div className="lg:col-span-1 lg:block sm:hidden bg-[url('images/home3.jpg')] bg-cover bg-no-repeat h-[300px]"></div>
      </div>
      <div className="sm:w-full sm:p-8 md:p-12 text-white sm:text-xl md:text-2xl lg:text-3xl bg-black">
        <div className="sm:w-[400px] md:w-[600px] lg:w-[800px] mx-auto flex justify-around">
          <h1 className="subpixel-antialiased">Bajuu</h1>
          <h1 className="antialiased">Kathoc</h1>
          <h1 className="italic">Pernik</h1>
          <h1 className="font-mono">Spatu</h1>
        </div>
      </div>
      <div className="flex sm:flex-row w-full sm:gap-x-4 md:gap-x-8 justify-center items-center sm:h-[500px] md:h-[700px]">
        <div className="flex sm:flex-col gap-y-3">
          <div className="bg-[url('images/home4.jpg')] sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px] bg-cover bg-no-repeat flex justify-center items-center">
            <p className="bg-black text-white sm:text-2xl md:text-4xl font-bold p-1">
              50% OFF
            </p>
          </div>
          <div className="bg-[url('images/home5.jpg')] sm:h-[200px] sm:w-[200px] md:h-[300px] md:w-[300px] bg-cover bg-no-repeat flex justify-center items-center">
            <p className="bg-black text-white sm:text-2xl md:text-4xl font-bold p-1">
              Happy Me
            </p>
          </div>
        </div>
        <div className="bg-[url('images/home6.jpg')] sm:h-[400px] sm:w-[400px] md:h-[600px] md:w-[400px] lg:w-[600px] bg-cover bg-no-repeat flex justify-center items-center">
          <p className="bg-black text-white sm:text-2xl md:text-4xl font-bold p-1">
            Classic Looks
          </p>
        </div>
      </div>
      <div className="mx-8">
        <h1 className="text-center my-8 text-amber-700 text-3xl font-bold">
          New Arrivals
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-12  mx-8">
          {products.map((item) => {
            return (
              <div className=" flex flex-col h-[400px] w-[250px] bg-white text-black">
                <CustomImage
                  className="h-48 w-48 mx-auto my-2"
                  src={item.image_url}
                />
                <p className="text-center ">{item.name}</p>
                <p className="text-center ">{item.price}</p>
                <Button className="" onClick={()=> cart.push(item) }>
                  Add to Cart
                </Button>{" "}
              </div>
            );
          })}

          {/*   <div className=" flex flex-col h-[400px] w-[250px] bg-[#2b2735]">
            <CustomImage
              className="h-48 w-48 mx-auto my-2"
              src="images/sale/img_placeholder_1.png"
            />
            <p className="text-center text-white">Hoddie</p>
            <p className="text-center text-white">$48</p>
            <Button className="" onClick={addToCart}>
              Add to Cart
            </Button>
          </div>

          <div className=" flex flex-col gap-x-2 h-[400px] w-[250px] bg-[#2b2735]">
            <CustomImage
              className="h-48 w-48 mx-auto my-2"
              src="images/sale/img_placeholder_10.png"
            />
            <p className="text-center text-white">Nighty</p>
            <p className="text-center text-white">$20</p>
            <Button className="" onClick={addToCart}>
              Add to Cart
            </Button>
          </div>

          <div className=" flex flex-col gap-x-2 h-[400px] w-[250px] bg-[#2b2735]">
            <CustomImage
              className="h-48 w-48 mx-auto my-2"
              src="images/sale/img_placeholder_3.png"
            />
            <p className="text-center text-white">Blue</p>
            <p className="text-center text-white">$30</p>
            <Button className="" onClick={addToCart}>
              Add to Cart
            </Button>
          </div>

          <div className=" flex flex-col gap-x-2 h-[400px] w-[250px] bg-[#2b2735]">
            <CustomImage
              className="h-48 w-48 mx-auto my-2 bg-white"
              src="images/sale/jacket.png"
            />
            <p className="text-center text-white">Jacket</p>
            <p className="text-center text-white">$30</p>
            <Button className="" onClick={addToCart}>
              Add to Cart
            </Button>
          </div>

          <div className=" flex flex-col gap-x-2 h-[400px] w-[250px] bg-[#2b2735]">
            <CustomImage
              className="h-48 w-48 mx-auto my-2"
              src="images/sale/man_pant_1.png"
            />
            <p className="text-center text-white">Trouser</p>
            <p className="text-center text-white">$25</p>
            <Button className="" onClick={addToCart}>
              Add to Cart
            </Button>
          </div>

          <div className=" flex flex-col gap-x-2 h-[400px] w-[250px] bg-[#2b2735]">
            <CustomImage
              className="h-48 w-48 mx-auto my-2"
              src="images/sale/women_hoddies_1.png"
            />
            <p className="text-center text-white">Hoddie</p>
            <p className="text-center text-white">$42</p>
            <Button className="" onClick={addToCart}>
              Add to Cart
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
