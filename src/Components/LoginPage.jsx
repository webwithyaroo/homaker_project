import {
  loginBanner,
  facebook,
  google,
  hide,
  check,
  message,
  lock,
  close,
} from "../constant";
import { Button } from "../Components/constant";
import { AppContext } from "../contest/AppContext";
import { useContext } from "react";
const LoginPage = () => {
  const { clicked, setClicked } = useContext(AppContext);
  return (
    <section
      className={
        clicked
          ? "fixed top-0 w-screen md:pt-[90px] h-screen grid place-content-center pt-10 bg-bgColor"
          : "bg-transparent"
      }
    >
      <div
        className={
          clicked
            ? "grid grid-cols-2 max-w-[1000px] max-[800px]:grid-cols-1 shadow-2xl px-2 relative  "
            : "hidden"
        }
      >
        <div
          className="absolute top-4 right-6 cursor-pointer "
          onClick={() => setClicked(!clicked)}
        >
          <img
            src={close}
            alt="close"
            className="shadow-2xl shadow-black rounded-2xl"
          />
        </div>
        <div className="bg-white max-h-[530px] max-[800px]:max-h-[670px] rounded-l-2xl lg:px-[42px] px-6 max-[800px]:rounded-2xl ">
          <h1 className="text-lg text-center text-accent mb-4 mt-4">
            Register Now!
          </h1>
          <p className="max-w-[222px] text-center mx-auto text-xs lg:mb-[18px] mb-6">
            Please enter your e-mail address and e-mail password
          </p>

          <div className="flex-center mb-6 gap-6 flex-wrap">
            <Button
              className={
                "  py-[12px] lg:px-8 px-6 ring-1 rounded-3xl flex-center gap-2 max-w-[143px] ring-regular "
              }
              IconUrl={google}
              label={"Google"}
            />
            <Button
              className={
                " py-[12px]  lg:px-8 px-6 ring-1 rounded-3xl ring-regular flex-center gap-2 max-w-[143px]"
              }
              IconUrl={facebook}
              label={"facebook"}
            />
          </div>
          <div className="flex  gap-2 items-center justify-center ">
            <hr className="h-[1px] w-full bg-regular outline-none border-none" />
            <p>Or</p>
            <hr className="h-[1px] w-full bg-regular outline-none border-none" />
          </div>

          {/* Form */}
          <FormInput />
          <CheckPassword />
          <SignInBtn />
        </div>
        <img
          src={loginBanner}
          alt="banner"
          className="max-h-[530px] rounded-r-2xl max-[800px]:hidden "
        />
      </div>
    </section>
  );
};
//sign in btn
function SignInBtn() {
  return (
    <>
      <Button
        label={"Sign In"}
        className={"bg-black text-white w-full py-[19px] rounded-full mt-4"}
      />
      <p className="pt-4 text-center pb-6 text-xs">
        Don’t have an account?{" "}
        <a href="/" className="text-blue-500">
          Register
        </a>
      </p>
    </>
  );
}
//form check btn
function CheckPassword() {
  return (
    <div className="flex-custom mt-3 text-[13px]">
      <div className="flex  gap-2 cursor-pointer">
        <img src={check} alt="icon" />
        <p>Remember me</p>
      </div>
      <p>Forgot password?</p>
    </div>
  );
}
//form
function FormInput() {
  return (
    <form action="" className="text-xs mt-6">
      {/* Email */}
      <div className="flex gap-4 rounded-full ring-[1px]  ring-regular p-4">
        <label for="email">
          <img src={message} alt="gmail" />
        </label>
        <input type="email" placeholder="Jimmyvan@gmail.com" />
      </div>
      {/* Password */}
      <div className="flex gap-4 mt-4 rounded-full ring-[1px] ring-regular p-4">
        <label for="password">
          <img src={lock} alt="lock" />
        </label>
        <input type="password" placeholder="Your password" />
      </div>
    </form>
  );
}

export default LoginPage;
