import { useState } from "react";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showNav, setshowNav] = useState(false);

  const toggleNav = () => {
    setshowNav(!showNav);
  };

  const navigate = useNavigate();

  return (
    <div className=" bg-white">
      <nav className="hidden lg:flex p-10 h-16 items-center w-full ">
        <div className="flex items-center w-[1700px]">
          <div className=" ">
            <img
              src="/assets/tedxxBowenLogo.jpg"
              className="w-[250px]"
              alt=""
            />
          </div>

          <div className="flex items-center ml-auto mr-auto gap-10 transition duration-75">
            <ul className="flex gap-[66px]">
              <li>Home</li>
              <li>About</li>
              <li>Events</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="">
            <IoCartOutline />
          </div>
        </div>
      </nav>

      <div className="lg:hidden flex p-10 h-16 items-center w-full">
        <div className="mr-auto" onClick={() => navigate("/")}>
          <img src="/assets/tedxxBowenLogo.jpg" className="w-[200px]" alt="" />
        </div>

        <button onClick={toggleNav}>
          <RxHamburgerMenu size={30} />
        </button>
      </div>

      {showNav && (
        <div className="lg:hidden flex flex-col p-10 h-full w-full fixed z-10 top-0 left-0 bg-white   gap-10">
          <div className="flex">
            <div className="mr-auto" onClick={() => navigate("/")}>
              <img
                src="/assets/tedxxBowenLogo.jpg"
                className="w-[200px]"
                alt=""
              />
            </div>

            <div className="" onClick={toggleNav}>
              <IoClose size={30} />
            </div>
          </div>

          <div className="">
            <ul className="flex flex-col text-center gap-[66px]">
              <li>Home</li>
              <li>About</li>
              <li>Events</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
