import fetchedData from "../../data.json";
import { useMediaQuery } from "react-responsive";

const JobDescription = (props: { active: number; isDark: boolean }) => {
  const { active } = props;
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <div className="flex flex-col items-center">
      <div
        className={`${
          props.isDark ? "bg-[#19202D]" : "bg-white"
        } w-[87.3%] pt-[40px] px-6 rounded-md duration-500 md:px-[48px]`}
      >
        <div className="md:flex md:mb-[44px] md:justify-between">
          <div className="flex flex-col gap-[11px] mb-[54px] md:mb-0">
            <div className="flex gap-[12px]">
              <span className="leading-[19.84px] text-base text-[#6E8098]">{`${
                fetchedData[active - 1].postedAt
              }`}</span>
              <span className="text-[#6E8098]">&bull;</span>
              <span className="leading-[19.84px] text-base text-[#6E8098]">{`${
                fetchedData[active - 1].contract
              }`}</span>
            </div>
            <h2
              className={`leading-[24.8px] font-bold ${
                props.isDark ? "text-white" : "text-[#19202D]"
              } text-[20px] duration-500 md:text-[28px] md:leading-[34.73px]`}
            >
              {fetchedData[active - 1].position}
            </h2>
            <span className="leading-[17.36px] text-[14px] text-[#5964E0] font-bold ">
              {fetchedData[active - 1].location}
            </span>
          </div>
          <div className="flex justify-center md:items-center">
            <button className="w-[279px] py-4 px-[54px] bg-[#5964E0] rounded-[5px] text-base leading-[19.86px] text-white font-bold mb-[32px] md:mb-0 md:px-[28px] md:w-[141px]">
              Apply Now
            </button>
          </div>
        </div>
        <p className="text-base leading-[26px] text-[#6E8098] mb-[40px] ">
          {fetchedData[active - 1].description}
        </p>
        <div>
          <h2
            className={` ${
              props.isDark ? "text-white" : ""
            }  text-[20px] leading-[24.8px] font-bold mb-[28px] duration-500`}
          >
            Requirements
          </h2>
          <p className="text-base leading-[26px] text-[#6E8098] mb-[32px]">
            {fetchedData[active - 1].requirements.content}
          </p>
          <ul className="flex flex-col gap-2">
            {fetchedData[active - 1].requirements.items.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-base leading-[26px] text-[#6E8098] list-disc ml-[17px]"
                >
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-[40px] mb-[48px]">
          <h2
            className={` ${
              props.isDark ? "text-white" : ""
            } text-[20px] leading-[24.8px] font-bold mb-[28px] duration-500`}
          >
            What You Will Do
          </h2>
          <p className="text-base leading-[26px] text-[#6E8098] mb-[32px]">
            {fetchedData[active - 1].role.content}
          </p>
          <ol className="flex flex-col gap-2">
            {fetchedData[active - 1].role.items.map((item, index) => {
              return (
                <li key={index} className="list-none flex gap-[28px]">
                  <span className="text-[#5964E0] text-base leading-[26px] font-bold">
                    {index + 1}
                  </span>
                  <span className="text-[#6E8098] text-base leading-[26px] ">
                    {item}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
      <div
        className={` ${
          props.isDark ? "bg-[#19202D]" : "bg-white"
        } flex justify-center p-6 mt-16 rounded-md duration-500 w-[100%]  md:justify-between md:px-12 md:items-center `}
      >
        {isTabletOrMobile && (
          <div className="flex flex-col gap-3">
            <h2
              className={`${
                props.isDark ? "text-white" : ""
              } text-xl leading-[24.8px] font-bold`}
            >
              {fetchedData[active].position}
            </h2>
            <span className="text-base leading-[19.84px] text-[#6E8098]">
              So Digital Inc.
            </span>
          </div>
        )}
        <button className="bg-[#5964E0] text-base leading-[19.86px] font-bold text-white w-[327px] py-4 rounded-[5px] md:w-[141px]">
          Apply Now
        </button>
      </div>
    </div>
  );
};
export default JobDescription;
