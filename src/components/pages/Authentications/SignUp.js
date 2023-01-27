// configuration, ex: react-router
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Third party packages, ex: redux
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { AiOutlineIdcard } from "react-icons/ai";
import { FaGoogle, FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import { MdLockOutline, MdPhone } from "react-icons/md";
import { useDispatch } from "react-redux";

// components
import logo from "../../../assets/images/Logo/lovemerg.jpeg";
import { auth } from "../../../firebase.init";
import setCookie from "../../../Helper/cookies/setCookie";
import { useRegAsMemberMutation } from "../../../Redux/features/userInfo/userApi";
import { loadUserData } from "../../../Redux/features/userInfo/userInfo";
import Error from "../../ui/error/Error";
import { TextField } from "./InputFields/TextField";
import MobileSignUp from "./MobileDesign/MobileSignUp";

// css files
import { Select } from "antd";
import "../../../App.css";
import "../../../assets/css/SignUp.css";
import { EmailField } from "./InputFields/EmailField";

const Signup = () => {
  // hook variables
  const [regAsMember, { data: response, isLoading: serverLoading, error }] =
    useRegAsMemberMutation();
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [agreement, setAgreement] = useState(false);

  // state declarations
  const [gender, setGender] = useState("");
  const [customError, setCustomError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  useEffect(() => {
    if (response) {
      setCookie("token", response?.data?.token);
      dispatch(loadUserData(response));
      reset();
    }
    if (response?.data?.user?.googleLogin === false) {
      navigate("/otp");
    } else if (response?.data?.user?.googleLogin === true) {
      navigate("/userprofile");
    }
  }, [response, dispatch, reset, navigate]);

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

  useEffect(() => {
    if (error) {
      setCustomError(error?.data?.message);
    }
  }, [error]);

  // function handler
  const emailHandler = () => {
    setCustomError("");
  };
  const passwordAndCOnfirmPasswordHandler = () => {
    setCustomError("");
  };

  const NidOrPassportNumberHandler = () => {
    setCustomError("");
  };

  const handleAgreement = (e) => {
    setCustomError("");
    setAgreement(e.target.checked);
  };

  const onSubmit = async (data) => {
    if (!agreement) {
      setCustomError("Please agree to the terms and conditions");
      return;
    }
    if (data.password !== data.confirmPassword) {
      setCustomError("Passwords do not match");
      return;
    }
    data.role = "member";
    data.gender = gender;
    await regAsMember(data);
  };

  return (
    <div className="hidden md:block">
      <div className="min-h-screen">
        <section className="flex justify-center items-center w-full flex-1 text-center px-3 md:px-20  min-h-screen">
          <div className="bg-white rounded-2xl shadow-2xl lg:flex w-[100%] md:w-3/4 lg:w-4/5 max-w-6xl relative">
            <div className="w-full lg:w-3/5 p-5 my-auto">
              <div className="text-left font-bold">
                <span className="gradient_text font-george">
                  <img
                    className="w-[150px]"
                    src={logo}
                    alt="logo"
                    crossOrigin="anonymous"
                  />
                </span>
              </div>
              <div className="py-10">
                <h2 className="text-3xl font-bold gradient_text">
                  Member Registration
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
                    className="lg:w-full w-64 mx-auto lg:grid lg:gap-x-3 lg:grid-cols-2"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <TextField
                      {...{
                        register,
                        errors,
                        icon: <FaRegUser className=" m-2 text-gray-400" />,
                        id: "firstName",
                        placeholder: "First name",
                        name: "firstName",
                        requiredMessage: "First name is required",
                      }}
                    />
                    <TextField
                      {...{
                        register,
                        errors,
                        icon: <FaRegUser className=" m-2 text-gray-400" />,
                        id: "lastName",
                        placeholder: "Last name",
                        name: "lastName",
                        requiredMessage: "Last name is required",
                      }}
                    />
                    <EmailField
                      {...{
                        register,
                        errors,
                        icon: <FaRegEnvelope className=" m-2 text-gray-400" />,
                        placeholder: "Email",
                        emailHandler,
                        name: "email",
                        id: "email",
                      }}
                    />
                    <section>
                      <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                        <MdPhone className=" m-2 text-gray-400" />
                        <input
                          {...register("phone", {
                            required: {
                              value: true,
                              message: "Phone is Required",
                            },
                          })}
                          type="text"
                          placeholder="Phone Number"
                          className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                          id="phone"
                        />
                      </div>
                      <h1 className="text-left ml-2">
                        {errors.phone?.type === "required" && (
                          <span className="w-full text-left text-red-400 text-sm">
                            {errors?.phone.message}
                          </span>
                        )}
                      </h1>
                    </section>
                    {/*Phone number field*/}
                    <section>
                      <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                        <AiOutlineIdcard className=" m-2 text-gray-400" />
                        <input
                          {...register("NidOrPassportNumber", {
                            required: {
                              value: true,
                              message: "Nid Or Passport Number is Required",
                            },
                            minLength: {
                              value: 10,
                              message:
                                "Nid Or Passport Number should be minimum 10 characters",
                            },
                          })}
                          type="text"
                          placeholder="NID or Passport Number"
                          className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                          id="NidOrPassportNumber"
                          onChange={NidOrPassportNumberHandler}
                        />
                      </div>
                      <h1 className="text-left ml-2">
                        {errors.NidOrPassportNumber?.type === "required" && (
                          <span className="w-full text-left text-red-400 text-sm">
                            {errors?.NidOrPassportNumber.message}
                          </span>
                        )}
                        {errors.NidOrPassportNumber?.type === "minLength" && (
                          <span className="w-full text-left text-red-400 text-sm">
                            {errors?.NidOrPassportNumber.message}
                          </span>
                        )}
                      </h1>
                    </section>
                    {/*NID Number*/}
                    <section>
                      <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                        <MdLockOutline className=" m-2 text-gray-400" />
                        <input
                          {...register("password", {
                            minLength: {
                              value: 8,
                              message:
                                "password should be minimum 8 characters",
                            },
                            required: {
                              value: true,
                              message: "Password is Required",
                            },
                          })}
                          type="password"
                          placeholder="Password"
                          className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                          id="password"
                          onChange={passwordAndCOnfirmPasswordHandler}
                        />
                      </div>
                      <h1 className="text-left ml-2">
                        {errors.password?.type === "required" && (
                          <span className="w-full text-left text-red-400 text-sm">
                            {errors?.password.message}
                          </span>
                        )}
                        {errors.password?.type === "minLength" && (
                          <span className="w-full text-left text-red-400 text-sm">
                            {errors?.password.message}
                          </span>
                        )}
                      </h1>
                    </section>
                    <section>
                      <div className="flex items-center bg-gray-100 p-2 w-full rounded-xl mt-3">
                        <MdLockOutline className=" m-2 text-gray-400" />
                        <input
                          {...register("confirmPassword", {
                            minLength: {
                              value: 6,
                              message:
                                "password should be minimum 8 characters",
                            },
                            required: {
                              value: true,
                              message: "Password is Required",
                            },
                          })}
                          type="password"
                          placeholder="Confirm Password"
                          className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                          id="confirmPassword"
                          onChange={passwordAndCOnfirmPasswordHandler}
                        />
                      </div>
                      <h1 className="text-left ml-2">
                        {errors.confirmPassword?.type === "required" && (
                          <span className="w-full text-left text-red-400 text-sm">
                            {errors?.confirmPassword.message}
                          </span>
                        )}
                        {errors.confirmPassword?.type === "minLength" && (
                          <span className="w-full text-left text-red-400 text-sm">
                            {errors?.confirmPassword.message}
                          </span>
                        )}
                      </h1>
                    </section>
                    <section className="relative">
                      <div className="flex items-center bg-gray-100 w-full p-2 rounded-xl mt-3">
                        <ImUsers className=" m-2 text-gray-400 absolute left-[8px]" />
                        <Select
                          className="flex-1 outline-none h-full bg-transparent text-sm text-gray-400"
                          bordered={false}
                          onSelect={(value) => setGender(value)}
                          allowClear
                          placeholder="Select Gender"
                          options={[
                            {
                              value: "man",
                              label: "Man",
                            },
                            {
                              value: "woman",
                              label: "Women",
                            },
                          ]}
                        ></Select>
                      </div>
                    </section>

                    <section className="col-span-2 items-center mt-3 pl-2">
                      <div className="flex h-full items-center">
                        <input
                          type="checkbox"
                          name=""
                          className="mr-2"
                          onChange={handleAgreement}
                        />{" "}
                        <p className="text-[#1E2022] text-[14px]">
                          {" "}
                          By continuing, you agree to our{" "}
                          <span className="text-blue-700 cursor-pointer">
                            Terms of Service
                          </span>{" "}
                          and{" "}
                          <span
                            className="text-blue-700 cursor-pointer"
                            onClick={() => navigate("/privacy-policy")}
                          >
                            Privacy Policy
                          </span>
                        </p>
                      </div>
                    </section>
                    <div className="col-span-2 w-full">
                      {customError && <Error message={customError} />}
                    </div>
                    <div className="col-span-2">
                      <input
                        type="submit"
                        value={serverLoading ? "Loading..." : "SIGN UP"}
                        className="border-2 cursor-pointer mt-6 border-primary hover:border-0 rounded-full px-12 py-2 hover:bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] hover:text-white duration-500 transition-all"
                      />
                    </div>
                  </form>
                  <p className="mt-3">
                    Register as professional{" "}
                    <Link
                      to="/regAsProfessional"
                      className="gradient_text font-bold"
                    >
                      REGISTER
                    </Link>{" "}
                  </p>
                </div>
                {/*Input Field*/}
              </div>
            </div>{" "}
            <div className="h-[200px] w-full bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] rounded-br-2xl rounded-bl-2xl p-2 lg:hidden text-white">
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
            {/*Sign in section */}
            <div className="hidden md:block bg-[linear-gradient(166deg,rgb(242,40,118)_0%,rgb(148,45,217)_100%)] lg:w-2/5 p-5 text-white rounded-tr-2xl rounded-br-2xl md:py-36 md:px-4 lg:px-12">
              <h2 className="font-bold text-3xl mb-2">Hello, Friend!</h2>
              <div className="border-2 w-10 border-white inline-block"></div>
              <p className="mb-4">If you have already an account </p>
              <Link
                to="/login"
                className="border-2 border-white rounded-full md:px-3 lg:px-12 py-2 hover:bg-white hover:text-primary duration-500 transition-all"
              >
                LOGIN
              </Link>
            </div>{" "}
            {/*Sign up section */}
          </div>
        </section>
      </div>
      <div className="md:hidden">
        <MobileSignUp />
      </div>
    </div>
  );
};

export default Signup;
