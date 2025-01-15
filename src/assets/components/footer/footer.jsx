import "../homepage.css";
import {
  Instagram,
  Twitter,
  Youtube,
  Github,
  Linkedin,
  Flame,
} from "lucide-react";
import Socials from "./socials";
import Footer_main from "./footer-main";
import Footer_footer from "./footer-main";
export default function Footer() {
  return (
    <>
      <footer className="mt-40">
        <Footer_main />
        <div className="socials  dark:bg-gray-900 flex-row justify-center items-center h-32 gap-x-4  text-gray-400 ">
        <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700  mb-3" />
        <Socials />
          <h3 className="m-3 text-xs  ">
            © 2023 Social_Abstractions™. All Rights Reserved.
          </h3>
          {/* <button><Flame className="border-2 rounded-2xl w-8 h-8 p-2 border-gray-400  hover:text-yellow-300 hover:border-yellow-300" /></button>
        <button><Instagram className="border-2 rounded-2xl w-8 h-8 p-2 border-gray-400  hover:text-pink-600 hover:border-pink-600" /></button>
        <button><Twitter className="border-2 rounded-2xl w-8 h-8 p-2 border-gray-400  hover:text-white hover:border-white" /></button>
        <button><Youtube className="border-2 rounded-2xl w-8 h-8 p-2 border-gray-400 hover:text-red-600 hover:border-red-600 " /></button>        
        <button><Github className="border-2 rounded-2xl w-8 h-8 p-2 border-gray-400 hover:text-green-500 hover:border-green-500" /></button>
        <button><Linkedin className="border-2 rounded-2xl w-8 h-8 p-2 border-gray-400 hover:text-sky-600 hover:border-sky-600" /></button> */}
        </div>

        <div className="scrolling-container ">
          <div className="scrolling-text oswald text-2xl">
            <span>SOCIAL MEDIA </span>
            <span>CONTENT CREATION </span>
            <span>ENGAGEMENT </span>
            <span>INFLUENCER MARKETING </span>
            <span>VIRAL CAMPAIGNS </span>
            <span>BRAND AWARENESS </span>
            <span>SOCIAL ANALYTICS </span>
            <span>HASHTAG TRENDS </span>
            <span>FOLLOWERS </span>
            <span>ENGAGEMENT RATE </span>
            <span>MARKETING STRATEGY </span>
            <span>REAL-TIME DATA </span>
            <span>USER INTERACTION </span>
            <span>CAMPAIGN PERFORMANCE</span>
          </div>
        </div>
      </footer>
    </>
  );
}
