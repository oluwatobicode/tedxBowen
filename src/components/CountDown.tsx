import React, { useState, useEffect } from "react";

// Define the shape of the timeLeft object
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountDown: React.FC = () => {
  // Function to calculate time left
  const calculateTimeLeft = (): TimeLeft => {
    const eventDate = new Date("2024-11-30T00:00:00");
    const now = new Date();
    const difference = eventDate.getTime() - now.getTime();

    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  // State to hold the time left
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval when the component unmounts
  }, []);

  return (
    <div>
      <div className="p-10 lg:space-y-6 space-y-10 bg-[#FF0000] flex lg:flex-row flex-col items-center justify-between">
        <div className="flex flex-col text-white gap-2 leading-[23.84px] font-normal h-[100px]">
          <span className="lg:text-[15px] lg:leading-[35.76px] text-[14px] leading-[21px] font-normal">
            TEDxBowen 2024
          </span>
          <h1 className="lg:text-[25px] lg:leading-[54px] text-[16px] leading-[24px] font-semibold">
            EDGE: ENGAGE | DISCOVER | GROW | EXPLORE
          </h1>
          <p className="lg:text-[20.49px] lg:leading-[30.74px] font-normal text-[15px] leading-[21px]">
            COMING TO THE STREET OF BOWEN UNIVERSITY
          </p>
        </div>
        <div className="lg:w-[400px] lg:h-[130px] w-[350px] p-6 rounded-md bg-white">
          <h1 className="text-right leading-[18px] text-[12px]">Countdown Timer:</h1>
          <div className="flex justify-between mt-1">
            <h3 className="text-[#FF0000] text-center font-bold">
              {timeLeft.days} <span className="block">Days</span>
            </h3>
            <h3 className="text-[#FF0000] text-center font-bold">
              {timeLeft.hours} <span className="block">Hours</span>
            </h3>
            <h3 className="text-[#FF0000] text-center font-bold">
              {timeLeft.minutes} <span className="block">Minutes</span>
            </h3>
            <h3 className="text-[#FF0000] text-center font-bold">
              {timeLeft.seconds} <span className="block">Seconds</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
