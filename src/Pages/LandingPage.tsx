import { useState } from "react";
import Filter from "../Components/Landing/Filter";
import JobWindow from "../Components/Landing/JobWindow";
import fetchedData from "../data.json";
const LandingPage = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  console.log(isClicked);
  return (
    <div className="pb-[62px]">
      <Filter />
      <div className="flex flex-col items-center gap-[49px]">
        {fetchedData.map((item, index) => {
          if (!isClicked) {
            if (index <= 11) {
              return <JobWindow />;
            }
          } else {
            return <JobWindow />;
          }
        })}
      </div>
      <div className="flex justify-center mt-[32px]">
        <button
          onClick={() => {
            setIsClicked(!isClicked);
          }}
          className="bg-[#5964E0] py-4 px-[30px] rounded-[5px]"
        >
          {isClicked ? "show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};
export default LandingPage;
