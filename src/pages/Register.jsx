import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="dark:bg-gray-900 text-slate-700 dark:text-white min-h-[85vh] flex items-center justify-center">
      <div className="p-5 lg:w-1/2">
        <h2 className="text-3xl font-bold mb-8 text-center">Registration</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:grid grid-cols-2 gap-2 bg-gray-200 dark:bg-gray-800 p-10 rounded shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">
              Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 rounded border-gray-500 focus:outline-none shadow"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-4 py-2 rounded border-gray-500 focus:outline-none shadow"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="block mb-2">
              Password <span className="text-primary">*</span>
            </label>
            <input
              type={`${!showPassword ? "password" : "text"}`}
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]+$/,
                  message:
                    "Password must contain at least one capital letter and one special character",
                },
              })}
              className="w-full px-4 py-2 rounded border-gray-500 focus:outline-none shadow"
            />
            <div
              className="absolute top-10 right-2 text-xl cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block mb-2">
              Confirm Password <span className="text-primary">*</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) => {
                  const { password } = getValues();
                  return password === value || "Passwords should match!";
                },
              })}
              className="w-full px-4 py-2 rounded border-gray-500 focus:outline-none shadow"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>
          <div className="mb-4 col-span-2">
            <label htmlFor="photoUrl" className="block mb-2">
              Photo <span className="text-primary">*</span>
            </label>
            <input
              type="file"
              id="photoUrl"
              {...register("photoUrl", { required: "Photo URL is required" })}
              className="w-full py-2 rounded border-gray-500 focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block mb-2">
              Gender
            </label>
            <select
              id="gender"
              {...register("gender")}
              className="w-full px-4 py-2 rounded border-gray-500 focus:outline-none shadow"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block mb-2">
              Phone Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              {...register("phoneNumber")}
              className="w-full px-4 py-2 rounded border-gray-500 focus:outline-none shadow"
            />
          </div>
          <div className="mb-4 col-span-2">
            <label htmlFor="address" className="block mb-2">
              Address
            </label>
            <textarea
              id="address"
              {...register("address")}
              className="w-full px-4 py-2 rounded border-gray-500 focus:outline-none shadow"
            ></textarea>
          </div>
          <input
            type="submit"
            className="w-full col-span-2 bg-primary text-white px-4 py-2 rounded hover:bg-secondary focus:outline-none"
            value={"Register"}
          />
        </form>
      </div>
    </div>
  );
};
