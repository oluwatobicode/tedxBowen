const Tedx = () => {
  return (
    <div className="tedx-hero lg:h-screen h-[65vh]">
      <div className="flex flex-col items-start p-10 space-y-6">
        <div className="w-full">
          <h1 className="text-white lg:text-[38px] text-[20px] font-bold lg:leading-[44.21px] leading-[18.42px] text-center lg:text-right">
            What is <span className="text-[#FF0000]">Tedx?</span>
          </h1>
        </div>
        <div className="">
          <p className="text-white lg:leading-[36px] leading-[18px] lg:w-[846px] w-full mb-10 lg:text-[18px] text-[16px]">
            "TEDx is a global movement of local, independently organized events
            where speakers share powerful, thought-provoking talks on a variety
            of topics".
          </p>
          <p className="text-white lg:leading-[36px] leading-[18px] lg:w-[846px] w-full lg:text-[18px] text-[16px]">
            TEDx is more than just talks. It's where you can learn new things,
            connect with cool people, and get inspired by fresh ideas. Whether
            you're into science, art, or social issues, TEDx has something that
            will spark your curiosity and keep you excited.
          </p>
        </div>
        <div className="">
          <h3 className="text-white text-[18px] mt-10">
            The <span className="text-[#FF0000]">‘x’</span> stands for
            <span className="block text-[#FF0000]">
              "independently organized".
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Tedx;
