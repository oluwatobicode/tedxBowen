import team from "../data/Team.json";
import TeamList from "./TeamList";

const Team = () => {
  return (
    <div className="h-full bg-black team">
      <div className="flex flex-col items-center justify-center ">
        <div className="pt-12 pb-12">
          <h1 className="text-white text-[32px] font-bold leading-[44.21px]">
            Meet The Team
          </h1>
        </div>

        <div className="mt-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {team.map((el, i) => (
            <TeamList el={el} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Team;
