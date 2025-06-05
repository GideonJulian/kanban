import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/Logo.png";
import logoIcon from "../assets/images/LogoIcon.png";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import googleIcon from "../assets/icons/googleIcon.png";
const Signup = () => {
  const [isSignup, setIsSignup] = useState(false);
  const handleSignupToggle = () => {
    setIsSignup(!isSignup);
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen flex md:flex-row flex-col items-center justify-center gap-0 md:gap-96 ">
      <div className="md:block hidden">
        <img src={logoIcon} alt="" className="w-[250px]" />
      </div>
      <div className="">
        <form>
          <div className="flex flex-col items-center gap-6">
            <img src={logo} alt="" className="w-[50px] h-[50px]" />
            <div>
              <h1 className="text-[30px] font-[600] ">
                {isSignup ? "Create an account" : "Log in to your account"}
              </h1>
              <p className="text-[#667085] text-[16px] font-[400] text-center ">
                {isSignup
                  ? "Start your 30-days free trial "
                  : "Welcome back! Please enter your details"}
              </p>
            </div>
          </div>
          <div className="mt-10">
            <div>
              <Input
                label={isSignup ? "Name" : "Email"}
                placeholder={isSignup ? "Enter your email" : "Enter your name"}
                type={isSignup ? "email" : "text"}
                id={isSignup ? "email" : "username"}
                style={
                  "rounded-lg border-2 border-[#D0D5DD] py-3 px-5 w-[360px] mt-3 bg-transparent text-[#48505E] focus:outline-none focus:border-primary-600 transition-colors duration-200"
                }
              />
            </div>
            <div className="mt-5">
              <Input
                label={isSignup ? "Email" : "Password"}
                style={
                  "rounded-lg border-2 border-[#D0D5DD] py-3 px-5 w-[360px] mt-3 bg-transparent text-[#48505E] focus:outline-none focus:border-primary-600 transition-colors duration-200"
                }
                placeholder={
                  isSignup ? "Enter your email  " : "Enter your password"
                }
              />
            </div>
            {isSignup && (
              <div className="mt-5">
                <Input
                  label={"Password"}
                  placeholder={"Enter your password"}
                  style={
                    "rounded-lg border-2 border-[#D0D5DD] py-3 px-5 w-[360px] mt-3 bg-transparent text-[#48505E] focus:outline-none focus:border-primary-600 transition-colors duration-200"
                  }
                />
              </div>
            )}
            <div className="flex mt-4 justify-between">
              <div className="flex items-center gap-3">
                <input type="checkbox" name="" id="" />
                <p className="text-[#48505E]">Remember for 30 days</p>
              </div>
              <p className="text-primary-600">Forgot password</p>
            </div>
          </div>
          <div>
            <Button
              text={isSignup ? "Sign up" : "Sign in"}
              style={`bg-primary-600 w-[360px] text-white py-3 mt-4 rounded-lg `}
              onClick={() => {
                handleSubmit;
                navigate("/dashboard");
              }}
            />
          </div>
          <div>
            <Button
              text={
                <>
                  <img src={googleIcon} alt="" />
                  <p className="font-[600] text-[16px] text-[#383E49]">
                    Sign in with Google
                  </p>
                </>
              }
              style={`w-[360px] py-3 rounded-lg border-2 border-[#D0D5DD] flex items-center justify-center gap-3  mt-3`}
            />
          </div>
          <div>
            <p className="text-center mt-4">
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <Link
                className="text-primary-600"
                onClick={() => {
                  handleSignupToggle();
                  navigate("/dashboard");
                }}
              >
                {isSignup ? "Sign in" : "Sign up"}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
