"use client";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {FormEvent, useState} from "react";
import {useCookies} from "react-cookie";
import logoImage from "../../resources/Mars_Logo.png";
import Footer from "../../components/footer";
import PopUp from "../../components/popUp";
import {baseURL} from "../../../config/server-config";

export default function Login() {
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [cookies, setCookie] = useCookies(["token"]);
  const router = useRouter();
  // API - loginHandler
  const loginHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch(`${baseURL}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.get("email"),
          password: formData.get("password"),
        }),
      });

      const responseData = await response.json();

      if (response.status === 200) {
        console.log(responseData.token);

        // Calculate expiration time (e.g., 1 day from now)
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1); // Adding 1 day

        // Save the token in a cookie with expiration time
        setCookie("token", responseData.token, {
          path: "/",
          expires: expirationDate, // Set expiration date
        });

        // console.log("Token saved in cookie:", responseData.token);

        // redirect the user home page
        router.push("/");
      } else if (response.status === 404) {
        console.log(responseData.message);
        setPopupMessage(
          "Oh no! 🫣 Seems to be you are not registered in our system. Please feel free to Sign Up today 😇"
        );
        setShowPopup(true);
      } else if (response.status === 401) {
        console.log(responseData.message);
        setPopupMessage("Really! 🧐 Try again, Invalid Credentials 🤥");
        setShowPopup(true);
      } else if (response.status === 500) {
        console.log(responseData.message);
        setPopupMessage(
          "Oh sorry! 😔 Seems to be interal server error, Please try again later 🫂"
        );
        setShowPopup(true);
      } else {
        console.log("Unexpected response:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  // Handler - Modler Handler
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <PopUp
          heading="Login Faild!"
          message={popupMessage}
          onClose={closePopup}
        />
      )}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Link href="/">
            <img
              className="mx-auto h-20 w-auto"
              src={logoImage.src}
              alt="Your Company"
            />
          </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={loginHandler}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="/auth/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign up now!
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
