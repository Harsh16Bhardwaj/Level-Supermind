import React from "react";
import "./Feedback.css";
import "../../components/homepage.css";
import { FaGithub } from "react-icons/fa";
import github from "../../../../public/github-repo.png";

function Feedback() {
  return (
    <>
      <div>
        <h1></h1>
        <div className="josefin main flex p-12 py-12 h-screen">
          <div className="left w-1/3 p-10 py-7 rounded-lg bg-gray-900 border-2 border-teal-500 h-full">
            <h2 className="josefin text-center  text-yellow-500 font-bold text-5xl">
              <span className="font-semibold text-gray-400 text-2xl">
                Quick{" "}
              </span>
              Feedback
            </h2>
            <hr className="mb-8" />
            <div className="text-center">
              <form action="">
                <div className="mb-6">
                  <label htmlFor="message">
                    What's your name ? <br />
                  </label>
                  <input
                    className="inputs mt-1"
                    type="text"
                    name="text"
                    id="name"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message">
                    What's your workmail ? <br />
                  </label>
                  <input
                    className="inputs mt-1"
                    type="email"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message">
                    What's your Feedback ? <br />
                  </label>
                  <input
                    className="inputs mt-1 h-44"
                    type="text"
                    id="message"
                    name="message"
                  ></input>
                </div>
                <div className="mb-4">
                  <input type="checkbox" name="beta" id="beta" />
                  <label
                    className="focus:bg-slate-100 mt-1 text-sm mb-4 focus:border-red-500"
                    htmlFor="beta"
                  >
                    {" "}
                    Would you like to SignUp for the Beta experience.{" "}
                  </label>
                </div>

                <button
                  type="submit  "
                  className="px-6 py-2 font-bold bg-red-500 rounded-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="text-center mid w-80 pt-20 h-80 m-20 mt-40  bg-rose-800 rounded-full flex-col justify-center ">
            <h3 className="text-gray-300 text-xl mb-2">Powered By</h3>
            <h2 className="font-bold text-amber-500 text-5xl">Langflow</h2>
            <p className="m-1 text-lg font-bold">&</p>
            <h2 className="font-bold text-gray-300 text-5xl">GPT-4o</h2>
          </div>
          <div className="right w-1/3 rounded-lg border-2 border-yellow-500 h-full">
            <div className="p-2 px-12">
              <div className="flex justify-center items-center mt-4">
                <h1 className="text-5xl font-bold mr-2">Contribute </h1>
                <FaGithub className="icon github mb-2 " />
              </div>
              <hr className="mb-5" />
              <h2 className="text-center text-lg">
                Found a bug? Help us make it better.{" "}
              </h2>
              <p className="poppins text-xs pb-4 px-2 text-center text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam eius labore animi quasi laudantium consequuntur at
                perspiciatis ducimus. Sapiente, dicta!
              </p>
              <img
                src={github}
                className="border-2 border-gray-300 rounded-xl"
                alt=""
              />
              <div className="flex justify-center items-center mt-6">
                <button className="px-6 py-2 font-bold bg-red-500 rounded-lg">
                  Start Contributing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
