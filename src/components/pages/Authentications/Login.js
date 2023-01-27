// configuration
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Third party packages
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

// components
import logo from "../../../assets/images/Logo/lovemerg.jpeg";
import { auth } from "../../../firebase.init";
import setCookie from "../../../Helper/cookies/setCookie";
import {
  useLoginAsMemberMutation,
  useRegAsMemberMutation,
} from "../../../Redux/features/userInfo/userApi";
import { loadUserData } from "../../../Redux/features/userInfo/userInfo";
import Error from "../../ui/error/Error";
import ForgetPasswordModal from "./ForgetPassword/ForgetPasswordModal";
import { EmailField } from "./InputFields/EmailField";
import { PasswordField } from "./InputFields/PasswordField";

// css files
import "../../../App.css";

const Login = () => {
  const [customError, setCustomError] = useState("");
  const [open, setOpen] = useState(false);
  const [loginAsMember, { data: response, isLoading, error: responseError }] =
    useLoginAsMemberMutation();
  const [
    regAsMember,
    { data: googleLoginResponse, isLoading: googleLoginLoading },
  ] = useRegAsMemberMutation();
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // js variables
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // useEffect declaration
  useEffect(() => {
    if (response) {
      setCookie("token", response?.data?.token);
      dispatch(loadUserData(response?.data));
      reset();
      navigate(from, { replace: true });
    }
    if (googleLoginResponse) {
      setCookie("token", googleLoginResponse?.data?.token);
      dispatch(loadUserData(response));
      navigate("/userprofile");
      reset();
    }
  }, [
    response,
    googleLoginResponse,
    dispatch,
    from,
    navigate,
    regAsMember,
    reset,
  ]);

  useEffect(() => {
    if (
      responseError?.status === 401 &&
      responseError?.data?.success === true
    ) {
      setCookie("token", responseError?.data?.data?.token);
      dispatch(loadUserData(responseError?.data?.data));
      navigate(from, { replace: true });
    } else if (responseError?.status === 404) {
      setCustomError(responseError?.data?.message);
    } else if (responseError?.data?.message.includes("Invalid credential")) {
      setCustomError("Passwords do not match");
    }
  }, [responseError, navigate, from, dispatch]);

  // Google Login
  useEffect(() => {
    if (user) {
      const userEmail = user?.user?.email;
      const data = {
        email: userEmail,
        googleLogin: true,
      };

      regAsMember(data);
    }
  }, [user, regAsMember]);

  // function declaration
  const modalControll = () => {
    setOpen(!open);
  };

  const onSubmit = async (data) => {
    await loginAsMember(data);
  };

  return (
    <div>
      <div className="">
        <section className="flex justify-center items-center w-full px-3 flex-1 text-center md:px-20 bg-gray-100 min-h-screen">
          <div className="bg-white rounded-2xl shadow-2xl md:flex w-[100%] md:w-3/4 lg:w-2/3 max-w-4xl">
            <div className="w-full lg:w-3/5 p-5">
              <div className="text-left font-bold">
                <div className="gradient_text font-george">
                  <img className="w-[150px]" src={logo} alt="logo" />
                </div>
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold gradient_text">
                  Member Login
                </h2>
                <div className="border-2 w-10 border-primary inline-block"></div>
                <div className="flex justify-center items-center my-2">
                  <p
                    className="border-2 cursor-pointer border-gray-200 rounded-full p-3 mx-1 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-400 transition-all"
                    onClick={() => signInWithGoogle()}
                  >
                    <FaGoogle className="text-sm" />
                  </p>
                </div>{" "}
                {/* Social Login section */}
                <p className="text-gray-400 my-3">or use your email account</p>
                <div>
                  <form
                    className="w-64 mx-auto"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <EmailField
                      {...{
                        register,
                        errors,
                        name: "email",
                        placeholder: "Email",
                        icon: <FaRegEnvelope className=" m-2 text-gray-400" />,
                      }}
                    />
                    <PasswordField
                      {...{
                        register,
                        errors,
                        name: "password",
                        placeHolder: "Password",
                        icon: <MdLockOutline className=" m-2 text-gray-400" />,
                        id: "password",
                        setCustomError,
                        type: "password",
                      }}
                    />
                    <div className="col-span-2">
                      {customError && <Error message={customError} />}
                    </div>
                    <span
                      className="text-gray-400 float-right mt-3 hover:text-gray-500 duration-500 cursor-pointer"
                      onClick={modalControll}
                    >
                      Forgot Password
                    </span>

                    <input
                      type="submit"
                      value={isLoading ? "Loading..." : "LOGIN"}
                      className="border-2 cursor-pointer mt-3 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
                      disabled={googleLoginLoading}
                    />
                  </form>
                  <p className="mt-3">
                    Login as professional{" "}
                    <Link
                      to="/loginAsProfessional"
                      className="gradient_text font-bold"
                    >
                      LOGIN
                    </Link>{" "}
                  </p>
                </div>
                {/*Input Field*/}
              </div>
            </div>{" "}
            <div className="h-[200px] w-full bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-br-2xl rounded-bl-2xl p-2 md:hidden text-white">
              <h2 className="font-bold text-3xl mb-2">Hello, Friend!</h2>
              <div className="border-2 w-10 border-white inline-block"></div>
              <p className="mb-4">
                Fill up your information and start journey with us
              </p>
              <Link
                to="/signup"
                className="border-2 border-white rounded-full px-3 lg:px-12 py-2 hover:bg-white hover:text-primary duration-500 transition-all"
              >
                Sign Up
              </Link>
            </div>
            {/*Sign up section */}
            <div className="hidden md:block bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] lg:w-2/5 p-5 text-white rounded-tr-2xl rounded-br-2xl md:py-36 md:px-4 lg:px-12">
              <h2 className="font-bold text-3xl mb-2">Hello, Friend!</h2>
              <div className="border-2 w-10 border-white inline-block"></div>
              <p className="mb-4">
                Fill up your information and start journey with us
              </p>
              <Link
                to="/signup"
                className="border-2 border-white rounded-full md:px-3 lg:px-12 py-2 hover:bg-white hover:text-primary duration-500 transition-all"
              >
                Sign Up
              </Link>
            </div>{" "}
            {/*Sign up section */}
          </div>
        </section>
        {open && <ForgetPasswordModal {...{ open, modalControll }} />}
        <Toaster />
      </div>
    </div>
  );
};

export default Login;
