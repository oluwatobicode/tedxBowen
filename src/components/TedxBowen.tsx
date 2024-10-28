const TedXBowen = () => {
  return (
    <div className="bg-black h-screen tedxbowen-hero flex flex-col items-start p-10 space-y-6">
      <h1 className="text-white lg:text-[30px] text-[20px] leading-[18.42px] font-bold lg:leading-[44.21px] text-center lg:text-right w-full">
        What is <span className="text-[#FF0000]">TEDx</span> Bowen University?
      </h1>

      <div className="lg:flex mt-10 absolute">
        <p className="text-white text-center lg:w-[450px] text-[15px] leading-[20px] lg:text-[20px] lg:leading-[36px]">
          TEDxBowenUniversity is a dynamic platform for sharing impactful ideas
          locally and globally. Our goal over the next five years is to engage
          50,000 people at live events and 200 million through our videos.
          Partnering with TED ensures broad, cost-effective access to a large,
          engaged audience.
        </p>

        <img
          src="/assets/micheal-boye.png"
          alt="boye-helmer"
          className="lg:w-[438px] w-[300px] lg:block relative top-16 left-20 lg:top-0 lg:left-0"
        />
      </div>
    </div>
  );
};
export default TedXBowen;
