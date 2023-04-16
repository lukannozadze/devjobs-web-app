import FilterIcon from "../../UI/FilterIcon";
import SearchIcon from "../../UI/SearchIcon";
import { useState, useEffect } from "react";

interface Inputs {
  filter: string;
}
const Filter = (props: {
  setIsFilterClicked: (isFilterClicked: boolean) => void;
  setFilterByTitleValue: (filterByTitleValue: string) => void;
  setIsClicked: (isClicked: boolean) => void;
  setIsEmpty: (isEmpty: boolean) => void;
  isDark: boolean;
}) => {
  const [TitleVal, setTitleVal] = useState<string>("");

  useEffect(() => {
    if (TitleVal !== "") {
      props.setFilterByTitleValue(TitleVal);
    }
  }, [TitleVal]);
  return (
    <form id="filter-form" className="flex justify-center -translate-y-[50%]">
      <div className="w-[327px] relative">
        <input
          className={`py-[32px] w-[100%] pl-6 rounded-md outline-none placeholder:text-base placeholder:leading-[19.84px] placeholder:font-kumbh  ${
            props.isDark
              ? "bg-[#19202D] placeholder:text-[white] placeholder:text-opacity-50 text-white"
              : "placeholder:text-[#19202D] placeholder:opacity-50"
          } duration-500`}
          type="text"
          placeholder="Filter by title..."
          onChange={(e) => {
            if (e.target.value === "") {
              props.setIsEmpty(true);
            } else {
              props.setIsEmpty(false);
            }
            setTitleVal(e.target.value);
          }}
        />

        <FilterIcon
          setIsFilterClicked={props.setIsFilterClicked}
          class="absolute top-[33px] right-[88px] z-0"
          isDark={props.isDark}
        />
        <SearchIcon
          class="absolute top-5 right-4"
          setIsClicked={props.setIsClicked}
          inputVal={TitleVal}
        />
      </div>
    </form>
  );
};

export default Filter;
