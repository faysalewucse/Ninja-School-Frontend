import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { googleSignIn } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const loginHandler = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center h-[85vh] dark:bg-slate-900">
      <div className="w-full md:w-1/4 p-5">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-100 border-0 text-slate-700 p-5">
          <div className="rounded-t mb-0 px-6 py-6">
            <h6
              onClick={googleSignIn}
              className="flex items-center justify-center gap-3 text-gray-600 dark:bg-slate-700 dark:text-white bg-white p-2 border rounded-lg font-bold hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              <FcGoogle /> Sign in with Google
            </h6>

            <hr className="mt-6 border-b-1 border-gray-400" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div>
            <form onSubmit={handleSubmit(loginHandler)}>
              <div className="relative w-full mb-3 ">
                <label
                  className="block uppercase  text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Email"
                  name="email"
                  style={{ transition: "all .15s ease" }}
                />
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="border-0 px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  placeholder="Password"
                  name="password"
                  style={{ transition: "all .15s ease" }}
                />
              </div>
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    className="form-checkbox border-0 rounded ml-1 w-5 h-5"
                    style={{ transition: "all .15s ease" }}
                  />
                  <span className="ml-2 text-sm font-semibold 0">
                    Remember me
                  </span>
                </label>
              </div>

              <div className="text-center mt-6">
                <input
                  type="submit"
                  value="SIGN IN"
                  className="bg-primary text-white w-full p-2 font-semibold rounded"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap mt-6 dark:text-white">
          <div className="w-1/2">
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <small>Forgot password?</small>
            </a>
          </div>
          <div className="w-1/2 text-right">
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <small onClick={() => navigate("/register")}>
                Create new account
              </small>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
