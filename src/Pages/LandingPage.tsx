import { useEffect, useState } from "react";
import Filter from "../Components/Landing/Filter";
import JobWindow from "../Components/Landing/JobWindow";
import fetchedData from "../data.json";
const LandingPage = (props: {
  setIsFilterClicked: (isFilterClicked: boolean) => void;
  modalState: {
    locationValue: string;
    isChecked: boolean;
    isSubmitted: boolean;
  };
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [filterByTitleValue, setFilterByTitleValue] = useState<string>("");
  const [isValidAndClicked, setIsValidAndClicked] = useState<boolean>(false);
  const [isBtnVisible, setIsBtnVisible] = useState<boolean>(false);

  let filteredArr: any[] = [];
  function filter() {
    if (isValidAndClicked) {
      filteredArr = fetchedData.filter((item) => {
        if (item.position === filterByTitleValue) {
          return item.position === filterByTitleValue;
        }
      });
    } else {
      filteredArr = fetchedData;
    }

    if (props.modalState.isSubmitted) {
      if (!props.modalState.isChecked) {
        filteredArr = fetchedData.filter((item) => {
          return item.location === props.modalState.locationValue;
        });
      } else {
        filteredArr = fetchedData.filter((item) => {
          return (
            item.location === props.modalState.locationValue ||
            item.contract === "Full Time"
          );
        });
      }
    }
  }
  useEffect(() => {
    if (props.modalState.isSubmitted) {
      props.setIsFilterClicked(false);
    }
  }, [props.modalState.isSubmitted]);
  filter();
  return (
    <div className="pb-[62px]">
      <Filter
        setIsFilterClicked={props.setIsFilterClicked}
        setFilterByTitleValue={setFilterByTitleValue}
        setIsValidAndClicked={setIsValidAndClicked}
      />
      <div className="flex flex-col items-center gap-[49px]">
        {filteredArr.map((item, index) => {
          if (!isClicked) {
            if (index <= 11) {
              return (
                <JobWindow
                  key={item.id}
                  logo={item.logo}
                  logoBackground={item.logoBackground}
                  position={item.position}
                  postedAt={item.postedAt}
                  contract={item.contract}
                  company={item.company}
                  location={item.location}
                />
              );
            } else if (index <= 10) {
              setIsBtnVisible(false);
            }
          } else {
            return (
              <JobWindow
                key={item.id}
                logo={item.logo}
                logoBackground={item.logoBackground}
                position={item.position}
                postedAt={item.postedAt}
                contract={item.contract}
                company={item.company}
                location={item.location}
              />
            );
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
          {isClicked ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};
export default LandingPage;
