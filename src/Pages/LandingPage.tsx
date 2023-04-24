import { useEffect, useState } from "react";
import Filter from "../Components/Landing/Filter";
import JobWindow from "../Components/Landing/JobWindow";
import fetchedData from "../data.json";
const LandingPage = (props: {
  setIsFilterClicked: (isFilterClicked: boolean) => void;
  setActive: (active: number) => void;
  isDark: boolean;
  modalState: {
    locationValue: string;
    isChecked: boolean;
    isSubmitted: boolean;
  };
  setModalState: (modalState: {
    locationValue: string;
    isChecked: boolean;
    isSubmitted: boolean;
  }) => void;
}) => {
  const [filterByTitleValue, setFilterByTitleValue] = useState<string>("");
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [filteredArr, setFilteredArr] = useState<any[]>(fetchedData);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  useEffect(() => {
    if (isClicked) {
      if (isEmpty) {
        setFilteredArr(fetchedData);
        setIsClicked(false);
      } else {
        const tempArr = fetchedData.filter((item) => {
          return (
            item.position.includes(filterByTitleValue) ||
            item.position
              .toLowerCase()
              .includes(filterByTitleValue.toLowerCase()) ||
            item.position
              .toUpperCase()
              .includes(filterByTitleValue.toUpperCase())
          );
        });
        setIsClicked(false);
        setFilteredArr(tempArr);
      }
    }
    if (props.modalState.isSubmitted) {
      if (!props.modalState.isChecked) {
        const tempArr = fetchedData.filter((item) => {
          return (
            item.location.includes(props.modalState.locationValue) ||
            item.location
              .toLowerCase()
              .includes(props.modalState.locationValue.toLowerCase()) ||
            item.location
              .toUpperCase()
              .includes(props.modalState.locationValue.toUpperCase())
          );
        });
        setFilteredArr(tempArr);
      } else {
        const tempArr = fetchedData.filter((item) => {
          return (
            item.location.includes(props.modalState.locationValue) ||
            item.location
              .toLowerCase()
              .includes(props.modalState.locationValue.toLowerCase()) ||
            (item.location
              .toUpperCase()
              .includes(props.modalState.locationValue.toUpperCase()) &&
              item.contract === "Full Time")
          );
        });
        setFilteredArr(tempArr);
      }
      props.setIsFilterClicked(false);
    }
  }, [isClicked, props.modalState.isSubmitted]);

  return (
    <div className="pb-[62px]">
      <Filter
        setIsFilterClicked={props.setIsFilterClicked}
        setFilterByTitleValue={setFilterByTitleValue}
        setIsClicked={setIsClicked}
        setIsEmpty={setIsEmpty}
        setModalState={props.setModalState}
        modalState={props.modalState}
        isDark={props.isDark}
      />
      <div className="flex flex-col items-center gap-[49px] md:flex-row md:flex-wrap md:justify-center">
        {filteredArr.map((item) => {
          return (
            <JobWindow
              key={item.id}
              id={item.id}
              logo={item.logo}
              logoBackground={item.logoBackground}
              position={item.position}
              postedAt={item.postedAt}
              contract={item.contract}
              company={item.company}
              location={item.location}
              setActive={props.setActive}
              isDark={props.isDark}
            />
          );
        })}
      </div>
    </div>
  );
};
export default LandingPage;
