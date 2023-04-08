import fetchedData from "../../data.json";
const JobWindow = () => {
  console.log(fetchedData[9].logoBackground);
  return (
    <div className="bg-white w-[327px] pl-[32px] pt-[49px] pb-[32px] rounded-md relative">
      <div
        className={`w-[50px] h-[50px] rounded-[15px] bg-[${fetchedData[9].logoBackground}] flex justify-center items-center absolute top-0 left-[32px] -translate-y-[50%]`}
      >
        <img src={fetchedData[9].logo} alt="logo" />
      </div>
      <div className="flex flex-col gap-4">
        <span className="leading-[19.84px]">5h ago . Full Time</span>
        <h2 className="leading-[24.8px] font-bold">Senior Software Engineer</h2>
        <span className="leading-[19.84px] mb-[44px]">Scoot</span>
      </div>
      <span className="leading-[17.36px] ">United Kingdom</span>
    </div>
  );
};
export default JobWindow;
