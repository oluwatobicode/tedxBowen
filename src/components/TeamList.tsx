const TeamList = ({ el }) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-10">
        {el.pic ? (
          <img
            className="rounded-full h-[205px] w-[205px] object-cover border-2 border-red-500"
            src={el.pic}
            alt={el.name}
          />
        ) : (
          <div className="rounded-full w-[205px] h-[215px] border-2 border-red-500 "></div>
        )}
        <h1 className="text-white font-semibold text-[20px] mt-2">{el.name}</h1>
        <p className="text-white font-normal text-[15px] w-[300px] text-center">
          {el.position}
        </p>
      </div>
    </div>
  );
};

export default TeamList;
