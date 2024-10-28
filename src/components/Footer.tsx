import { FaTiktok } from "react-icons/fa";
import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white w-full flex flex-col items-center justify-center">
      <div className="flex md:flex-row flex-col justify-between gap-10 p-5 md:p-10 w-[400px]  md:w-[800px]">
        <div className=" ">
          <img src="/assets/tedxxBowenLogo.jpg" className="w-[250px]" alt="" />
        </div>

        <div className="socials flex flex-row items-center  gap-5">
          <h1 className="text-[15px] leading-[20.93px] font-medium">
            tedxbowenuni
          </h1>

          <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center border-2 border-[#F2021FE5]">
            <div className="w-[25px] h-[25px] bg-[#F2021FE5] rounded-md flex items-center justify-center">
              <a href="https://x.com/tedxbowenuni" target="blank">
                <FaXTwitter color="#fff" size="15px" />
              </a>
            </div>
          </div>

          <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center border-2 border-[#F2021FE5]">
            <div className="w-[25px] h-[25px] bg-[#F2021FE5] rounded-md flex items-center justify-center">
              <a href="https://www.tiktok.com/@tedxbowenuni" target="blank">
                <FaTiktok color="#fff" size="15px" />
              </a>
            </div>
          </div>

          <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center border-2 border-[#F2021FE5]">
            <div className="w-[25px] h-[25px] bg-[#F2021FE5] rounded-md flex items-center justify-center">
              <a href="https://www.instagram.com/tedxbowenuni/" target="blank">
                <FaInstagram color="#fff" size="15px" />
              </a>
            </div>
          </div>

          <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center border-2 border-[#F2021FE5]">
            <div className="w-[25px] h-[25px] bg-[#F2021FE5] rounded-md flex items-center justify-center">
              <a
                href="https://www.linkedin.com/company/tedxbowenuni/?viewAsMember=true"
                target="blank"
              >
                <FaLinkedinIn color="#fff" size="15px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
