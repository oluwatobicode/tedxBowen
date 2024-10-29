import { useNavigate } from "react-router-dom";

const TicketIntro = () => {
  const navigate = useNavigate();
  return (
    <div className="ticket lg:h-[80vh] h-[50vh]">
      <div className=" h-full relative">
        <h1 className="text-white lg:text-[30px] text-[15px] leading-[18.42px] pt-5 font-bold lg:leading-[44.21px] text-center w-full">
          Click the button below to get a ticket!
        </h1>
        <button
          className="lg:w-[350px] w-[250px] absolute bottom-0 lg:left-[36%] left-[24%]"
          onClick={() => navigate("/checkout")}
        >
          <img src="assets/ticketbtn.png" alt="button" />
        </button>
      </div>
    </div>
  );
};
export default TicketIntro;
