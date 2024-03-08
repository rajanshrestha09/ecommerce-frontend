import React from "react";
import { Input,Button } from "./index";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function LoginCompnent() {
  const { register, handleSubmit } = useForm();

  function handleLogin() {
    console.log("login");
  }
  return (
    <div className="flex justify-center my-20">
      <div className="rounded-lg hover:shadow-2xl bg-slate-950 w-[600px] flex flex-col justify-center items-center">
        <div className="my-6">
          <h1 className="text-center text-2xl font-bold text-amber-700 mb-2">
            Login
          </h1>
          <p className="text-white text-center text-sm">
            Not have an account?{" "}
            <Link to="/signup">
              {" "}
              <span className="text-base text-blue-500 hover:text-blue-700 hover:underline">
                Signup
              </span>
            </Link>
          </p>
        </div>
        <div className="mb-8 flex justify-center w-[400px] lg:w-[800px]">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className=" flex flex-col items-end text-sm"
          >
            <Input
              label="Username/Email"
              {...register("user")}
              className="my-1 mx-2 "
            />
            <Input
              label="Password"
              {...register("user")}
              className="my-1 mx-2"
            />
            <Button className="my-4 h-8 uppercase font-medium text-base">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginCompnent;
