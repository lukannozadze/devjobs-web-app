import fetchData from "../../data.json";
const CompanyDescription = (props: { active: number; isDark: boolean }) => {
  const { active } = props;
  return (
    <div
      className={`w-[87.3%] ${
        props.isDark ? "bg-[#19202D]" : "bg-white"
      } flex flex-col items-center rounded-md -translate-y-[15px] relative duration-500 md:flex-row md:gap-[40px] md:mb-4  `}
    >
      <div
        className="w-[50px] h-[50px] rounded-[15px] flex justify-center items-center absolute -top-[25px] md:relative md:w-[140px] md:h-[140px] md:top-auto md:rounded-none md:rounded-bl-[15px]"
        style={{ background: `${fetchData[active - 1].logoBackground}` }}
      >
        <img
          className="md:w-[40%] h-[20%]"
          src={fetchData[active - 1].logo}
          alt="logo"
        />
      </div>
      <div className="md:flex md:items-center md:w-[68.06%] md:justify-between ">
        <div className="flex flex-col items-center md:items-start ">
          <h2
            className={`${
              props.isDark ? "text-white" : ""
            }  mt-[49px] mb-[13px] text-[20px] leading-[24.8px] font-bold duration-500 md:mt-0 md:text-2xl md:leading-[29.74px] `}
          >
            {fetchData[active - 1].company}
          </h2>
          <span className="mb-[27px] text-base leading-[19.84px] text-[#6E8098] md:mb-0">
            {fetchData[active - 1].company.toLowerCase() + ".com"}
          </span>
        </div>
        <button className="mb-[32px] bg-[#5964E0] bg-opacity-10 py-4 px-5 rounded-[5px] text-[#5964E0] text-base leading-[19.84px] font-bold cursor-pointer md:mb-0 md:w-[147px] ">
          Company Site
        </button>
      </div>
    </div>
  );
};
export default CompanyDescription;
