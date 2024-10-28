const TicketIntro = () => {
  return (
    <div className="ticket lg:h-[80vh] h-[50vh]">
      <div className=" h-full relative">
        <button
          className="lg:w-[350px] w-[250px] absolute bottom-0 lg:left-[36%] left-[24%]"
          // onClick={() => navigate("/checkout")}
        >
          <a href="https://forms.gle/W3BsCBfJca2xM3MT9" target="blank">
            <img src="assets/ticketbtn.png" alt="button" />
          </a>
        </button>
      </div>
    </div>
  );
};
export default TicketIntro;
