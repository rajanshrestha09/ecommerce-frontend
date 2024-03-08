import React from "react";
import { Button, Input } from "../index";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "Categories",
      slug: "/categories",
    },
    {
      name: "Product List",
      slug: "/productList",
    },
    {
      name: "Cart",
      slug: "/cart",
    },
  ];
  return (
    <header className="flex flex-col text-white mx-2 my-1">
      <div className="flex flex-row sm:justify-between lg:justify-around items-center p-1 mt-2">
        <Link to="/">
          <div className="text-3xl font-bold text-amber-700">Good Shop</div>
        </Link>
        <div className="hidden lg:flex items-center border-none">
          <Input className="w-full"/>
          <Button className="ms-1 w-10 rounded-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="25px"
              height="25px"
              fill="white"
              className="mx-auto"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </Button>
        </div>
        <div className="flex items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="25px"
              height="25px"
              fill="white"
              className="hover:fill-amber-700"
            >
              <path
                d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 
            71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 
            16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 
            0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 
            35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
              />
            </svg>
          </div>
          <div
            className="mx-2"
            onClick={() => {
              navigate("/cart");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width="25px"
              height="25px"
              fill="white"
              className="hover:fill-amber-700"
            >
              <path
                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 
            45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 
            11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 
            0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 
            464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 
            0-96z"
              />
            </svg>
          </div>
          <Button className="px-2 py-1 ms-4 rounded-lg w-20 text-amber-700 hover:bg-black hover:text-amber-500" onClick={()=>navigate("/login")}>
            Login
          </Button>
        </div>
      </div>
      <div className="w-full sm:mt-4 lg:mt-2 lg:px-2  flex sm:justify-between sm:items-start md:items-center md:justify-center">
        <ul className="sm:w-72 lg:w-96 lg:p-2 flex sm:flex-col md:flex-row justify-around md:items-center">
          {navItems.map((item) =>
            item ? (
              <li
                key={item.name}
                className="sm:text-center sm:hidden md:block hover:underline mx-2 my-1 px-2 lg:w-36 text-cente"
              >
                <Button
                  onClick={() => navigate(item.slug)}
                  className="hover:underline sm:w-24 lg:w-32 h-10 sm:text-base hover:sm:text-lg text-amber-700 hover:border hover:text-amber-500"
                >
                  {item.name}
                </Button>
              </li>
            ) : null
          )}
          <li></li>
        </ul>
        <div className="sm:block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="25px"
            height="25px"
            fill="white"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
