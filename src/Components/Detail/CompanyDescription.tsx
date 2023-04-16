import fetchData from "../../data.json";
const CompanyDescription = (props: { active: number }) => {
  const { active } = props;
  console.log(fetchData[active]);
  return (
    <div className="w-[87.3%] bg-white flex flex-col items-center rounded-md -translate-y-[15px] relative">
      <div
        className="w-[50px] h-[50px] rounded-[15px] flex justify-center items-center absolute -top-[25px]"
        style={{ background: `${fetchData[active - 1].logoBackground}` }}
      >
        <img src={fetchData[active - 1].logo} alt="logo" />
      </div>
      <h2 className="mt-[49px] mb-[13px] text-[20px] leading-[24.8px] font-bold">
        {fetchData[active - 1].company}
      </h2>
      <span className="mb-[27px] text-base leading-[19.84px] text-[#6E8098]">
        {fetchData[active - 1].company.toLowerCase() + ".com"}
      </span>
      <button className="mb-[32px] bg-[#5964E0] bg-opacity-10 py-4 px-5 rounded-[5px] text-[#5964E0] text-base leading-[19.84px] font-bold cursor-pointer">
        Company Site
      </button>
    </div>
  );
};
export default CompanyDescription;
