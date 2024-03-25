import { Link } from "react-router-dom";
import IndustriesNavMenu from "./Nav/Industries";
import ProductNavMenu from "./Nav/Product";
import { useState } from "react";
import Navbar from "../Navbar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="flex justify-between items-center bg-dark px-8 py-6 lg:py-8 lg:px-20 text-white sticky lg:top-0 z-40">
        <aside className="hidden lg:block">
          <Link to="/">
            <img
              src="/logos/main.png"
              alt="logo"
              className="w-[214.69px] h-[40px]"
            />
          </Link>
        </aside>
        <aside className="hidden lg:block">
          <ul className="flex gap-10">
            <li className="relative group">
              <div>
                <div className="flex gap-2 cursor-pointer">
                  Industries
                  <img
                    src="/icons/caret_down_white.svg"
                    alt=""
                    className="mt-0.5"
                  />
                </div>
                <IndustriesNavMenu />
              </div>
            </li>
            <li className="relative group">
              <div className="flex gap-2 cursor-pointer">
                Product
                <img
                  src="/icons/caret_down_white.svg"
                  alt=""
                  className="mt-0.5"
                />
              </div>
              <ProductNavMenu />
            </li>
            <li className="cursor-pointer">
              <a href="#calculator">Calculator</a>
            </li>
          </ul>
        </aside>
        <aside className="hidden lg:flex gap-5 items-center">
          <Link to="login">Login in</Link>
          <Link
            to="contact"
            className="border-[1.5px] border-white px-6 py-3 rounded-full flex gap-1.5"
          >
            Request A Demo
            <img src="/icons/arrow_forward_white.svg" alt="arrow" />
          </Link>
        </aside>
        <aside className="lg:hidden flex justify-between w-full">
          <img src="/logos/main.png" alt="logo" className="h-10" />
          <img
            src="/icons/hamburger.svg"
            alt=""
            className="w-10"
            onClick={() => setIsOpen(true)}
          />
        </aside>
      </header>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Header;
