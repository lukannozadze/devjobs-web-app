interface props {
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  company: string;
  location: string;
}
const JobWindow = (props: props) => {
  const {
    logo,
    logoBackground,
    position,
    contract,
    postedAt,
    company,
    location,
  } = props;

  return (
    <div className="bg-white w-[327px] pl-[32px] pt-[49px] pb-[32px] rounded-md relative font-kumbh">
      <div
        className={`w-[50px] h-[50px] rounded-[15px] flex justify-center items-center absolute top-0 left-[32px] -translate-y-[50%]`}
        style={{ backgroundColor: `${logoBackground}` }}
      >
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <span className="leading-[19.84px] text-base text-[#6E8098]">{`${postedAt}`}</span>
          <span className="text-[#6E8098]">&bull;</span>
          <span className="leading-[19.84px] text-base text-[#6E8098]">{`${postedAt}`}</span>
        </div>
        <h2 className="leading-[24.8px] font-bold text-[#19202D] text-[20px]">
          {position}
        </h2>
        <span className="leading-[19.84px] text-base text-[#6E8098] mb-[44px]">
          {company}
        </span>
      </div>
      <span className="leading-[17.36px] text-[14px] text-[#5964E0] font-bold ">
        {location}
      </span>
    </div>
  );
};
export default JobWindow;
