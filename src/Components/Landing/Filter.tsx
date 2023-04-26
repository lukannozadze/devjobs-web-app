import BlueSearchIcon from "../../UI/BlueSearchIcon";
import FilterIcon from "../../UI/FilterIcon";
import LocationIcon from "../../UI/LocationIcon";
import SearchIcon from "../../UI/SearchIcon";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import CorrectIcon from "../../UI/CorrectIcon";
const Filter = (props: {
  setIsFilterClicked: (isFilterClicked: boolean) => void;
  setFilterByTitleValue: (filterByTitleValue: string) => void;
  setIsClicked: (isClicked: boolean) => void;
  setIsEmpty: (isEmpty: boolean) => void;
  modalState: {
    locationValue: string;
    isChecked: boolean;
    isSubmitted: boolean;
  };
  setSearchBtnIsClicked:(SearchBtnIsClicked:boolean)=>void;
  isDark: boolean;
  setModalState: (modalState: {
    locationValue: string;
    isChecked: boolean;
    isSubmitted: boolean;
  }) => void;
}) => {
  const [TitleVal, setTitleVal] = useState<string>("");
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktopOrTablet = useMediaQuery({query:"(min-width:1148px)"});
  useEffect(() => {
    if (TitleVal !== "") {
      props.setFilterByTitleValue(TitleVal);
    }
  }, [TitleVal]);
  return (
    <form id="filter-form" className="flex justify-center -translate-y-[50%]">
      <div className="w-[327px] relative md:w-[700px] md:flex sxl:w-[1150px] ">
        {isTabletOrMobile && (
          <div className="absolute top-[32px] left-6">
            <BlueSearchIcon />
          </div>
        )}
        <input
          className={`py-[32px] w-[100%] pl-6 md:pl-[57px] rounded-md outline-none placeholder:text-base placeholder:leading-[19.84px] placeholder:font-kumbh  ${
            props.isDark
              ? "bg-[#19202D] placeholder:text-white placeholder:text-opacity-50 text-white "
              : "placeholder:text-[#19202D] placeholder:opacity-50"
          } duration-500 md:w-[32.2%] md:rounded-br-none md:rounded-tr-none`}
          type="text"
          placeholder={isDesktopOrTablet?"Filter by title, companies, expertise...":"Filter by title..."}
          onChange={(e) => {
            if (e.target.value === "") {
              props.setIsEmpty(true);
            } else {
              props.setIsEmpty(false);
            }
            setTitleVal(e.target.value);
          }}
        />
        {isTabletOrMobile && <div className="bg-[#6E8098] w-[1px]"></div>}
        {isTabletOrMobile && (
          <div className="w-[67.7%] flex">
            <div className="w-[91%] flex relative">
              <div className="absolute top-[32px] left-6">
                <LocationIcon />
              </div>
              <input
                onChange={(e)=>{
                  props.setModalState({...props.modalState,locationValue:e.target.value})
                }}
                id="filter-modal-input"
                type="text"
                placeholder="Filter by location..."
                className={`w-[100%] py-[32px] pl-[57px] outline-none placeholder:text-base placeholder:leading-[19.84px]  placeholder:text-opacity-50  ${
                  props.isDark
                    ? "bg-[#19202D] placeholder:text-white placeholder:text-opacity-50 text-white duration-500"
                    : "bg-white placeholder:text-[#19202D] duration-500"
                }`}
              />
            </div>
            <div className="bg-[#6E8098] w-[2px]"></div>
            <div
              
              id="filter-modal-checkbox-container"
              className={`flex items-center self-start pl-6 gap-4 py-[18px] w-full rounded-tr-md rounded-br-md sxl:gap-[46px]   ${
                props.isDark ? "bg-[#19202D] " : "bg-white"
              } duration-500`}
            >
              <div
              onClick={() =>
                props.setModalState({
                  ...props.modalState,
                  isChecked: !props.modalState.isChecked,
                })
               
              }
                id="filter-modal-checkbox"
                className={`w-6 h-6 ${
                  !props.modalState.isChecked
                    ? "bg-[#19202D] opacity-10 "
                    : "bg-[#5964E0]  "
                } flex justify-center items-center rounded-sm ${
                  props.isDark && !props.modalState.isChecked
                    ? "bg-white"
                    : ""
                }`}
              >
                {props.modalState.isChecked && (
                  <CorrectIcon setModalState={props.setModalState} />
                )}
              </div>
              <span
                id="filter-modal-contract"
                className={`${
                  props.isDark ? "text-white" : ""
                } text-base leading-[19.84px] font-bold`}
              >
               {isDesktopOrTablet?"Full Time Only":"Full Time"}
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  

                  if(TitleVal!==""){
                    props.setSearchBtnIsClicked(true);
                  }
                  else{
                    props.setModalState({
                      ...props.modalState,
                      isSubmitted: true,
                    });
                  } 
                 
                }}
                className="w-[80px] bg-[#5964E0] py-4 text-base leading-[19.84px] text-white font-bold rounded-[5px] sxl:w-[123px]  "
                id="filter-modal-btn "
              >
                Search
              </button>
            </div>
          </div>
        )}

        <FilterIcon
          setIsFilterClicked={props.setIsFilterClicked}
          class="absolute top-[33px] right-[88px] z-0 md:hidden"
          isDark={props.isDark}
        />
        <SearchIcon
          class="absolute top-5 right-4 md:hidden"
          setIsClicked={props.setIsClicked}
          inputVal={TitleVal}
        />
      </div>
    </form>
  );
};

export default Filter;
