import { FiArrowUpRight } from "react-icons/fi";

const TicketCheck = () => {
  return (
    <div className="h-screen bg-black team flex flex-col items-center justify-center">
      <div className="m-5">
        <div className="">
          <h1 className="text-white lg:text-[30px] text-[20px] leading-[18.42px] font-bold lg:leading-[44.21px] text-center w-full">
            Ticket Checkout
          </h1>
          <h1 className="mt-5 text-white lg:text-[20px] text-[20px] leading-[25.42px] font-normal lg:leading-[44.21px] text-center w-full">
            Please select your campus so as to purchase a ticket!
          </h1>
        </div>

        <div className="p-10">
          <h1 className="flex mb-3 flex-row items-center gap-5  text-white lg:text-[25px] text-[18px] leading-[18.42px] font-normal lg:leading-[44.21px]  w-full">
            <a target="blank" href="https://forms.gle/W3BsCBfJca2xM3MT9">
              Bowen University,Iwo Campus.
            </a>
            <FiArrowUpRight />
          </h1>

          <h1 className="flex flex-row items-center gap-5  text-white lg:text-[25px] text-[18px] leading-[18.42px] font-normal lg:leading-[44.21px]  w-full">
            <a target="blank" href="https://forms.gle/E5viVdYfNQkXEQVX6 ">
              BUTH,Ogbomoso Campus.
            </a>
            <FiArrowUpRight />
          </h1>
        </div>
      </div>
    </div>
  );
};
export default TicketCheck;
