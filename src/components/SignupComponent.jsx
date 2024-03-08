import React from "react";
import { Input, Button } from "./index";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function SignupComponent() {
  const { register, handleSubmit } = useForm();

  function handleLogin() {
    console.log("login");
  }
  return (
    <div className="flex justify-center my-20">
      <div className="rounded-lg hover:shadow-2xl bg-slate-950 w-[600px] flex flex-col justify-center items-center">
        <div className="my-6">
          <h1 className="text-center text-2xl font-bold text-amber-700 mb-2">
            Register User
          </h1>
          <p className="text-white text-center text-sm">
            Already have an account?{" "}
            <Link to="/login">
              {" "}
              <span className="text-base text-blue-500 hover:text-blue-700 hover:underline">
                Login
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
              label="Fullname"
              {...register("user")}
              className="my-2 mx-2 rounded-sm "
            />
            <Input
              label="Username"
              {...register("user")}
              className="my-2 mx-2 rounded-sm "
            />
            <Input
              label="Email"
              {...register("user")}
              className="my-2 mx-2 rounded-sm "
            />
            <Input
              label="Password"
              {...register("user")}
              className="my-2 mx-2 rounded-sm"
            />
            <Button className="my-4 h-8 uppercase font-medium text-base">
              Signup
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupComponent;
