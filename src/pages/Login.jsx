import { FcGoogle } from "react-icons/fc";
import Button from "../components/shared/Button";

export const Login = () => {
  return (
    <div>
      <div className="absolute w-full h-[80vh] dark:bg-slate-900">
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-900 dark:bg-gray-100 border-0 text-white dark:text-gray-700">
                <div className="rounded-t mb-0 px-6 py-6">
                  <h6 className="flex items-center justify-center gap-3 text-gray-600 bg-white p-2 border rounded-lg font-bold">
                    <FcGoogle /> Sign in with Google
                  </h6>

                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <div className="text-center mb-3 font-bold">
                    <small>Or sign in with credentials</small>
                  </div>
                  <form>
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
                      <Button
                        text={"SIGN IN"}
                        style={
                          "bg-primary dark:text-white text-white w-full font-bold"
                        }
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
                    <small>Create new account</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
