import React from "react";
import logo from "../assets/homepage/mezor-icon-50.svg";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between sm:px-20 sm:py-12 text-[#222B48] transition ease-in-out -translate-y-1 ">
        <a className="flex font-bold items-center gap-4 text-2xl transition ease-in-out delay-100   hover:scale-95 duration-300" href="#">
          <img src={logo} alt="" />
          <p>Mezor</p>
        </a>
        <div className="flex gap-4 items-center font-bold">
          <button className="px-4 py-2 rounded-lg bg-blue-500 text-white transition ease-in-out delay-100 hover:scale-95 hover:opacity-80 duration-300">
            Sign Up
          </button>
          <button className=" bg-[#F9F9F9] border-solid border-2 border-[#5893FF] text-[#5893FF] px-4 py-2 rounded-lg transition ease-in-out delay-100 hover:scale-95 hover:opacity-80 duration-300 ">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
