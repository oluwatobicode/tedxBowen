const Intro = () => {
  return (
    <div className="bg-white mb-5 flex flex-col items-center text-center gap-1  h-[150px] p-10 lg:space-y-6 md:flex-row md:justify-between md:gap-10">
      <h1 className="md:text-[25px] text-[24px] font-bold lg:leading-[44.21px] leading-[22.1px] text-[#1E1E1E]">
        We are <span className="text-[#FF0000]">TEDx </span>
        <span className="block">Bowen University</span>
      </h1>
      <h1 className="md:text-[25px] text-[15px] font-normal lg:leading-[44.21px] leading-[24px] text-[#1E1E1E] text-center md:text-right">
        Celebrating ideas that are rooted in our{" "}
        <span className="block">community</span>
      </h1>
    </div>
  );
};
export default Intro;
