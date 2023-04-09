import FilterIcon from "../../UI/FilterIcon";
import SearchIcon from "../../UI/SearchIcon";
const Filter = (props: {
  setIsFilterClicked: (isFilterClicked: boolean) => void;
  setFilterByTitleValue: (filterByTitleValue: string) => void;
  setIsSearchClicked: (isSearchClicked: boolean) => void;
}) => {
  return (
    <form className="flex justify-center -translate-y-[50%]">
      <div className="w-[327px] relative">
        <input
          className="py-[32px] w-[100%] pl-6"
          type="text"
          placeholder="Filter by title..."
          onChange={(e) => {
            props.setFilterByTitleValue(e.target.value);
          }}
        />
        <FilterIcon
          setIsFilterClicked={props.setIsFilterClicked}
          class="absolute top-[30px] right-[88px] z-0"
        />
        <SearchIcon
          class="absolute top-[16px] right-4"
          setIsSearchClicked={props.setIsSearchClicked}
        />
      </div>
    </form>
  );
};

export default Filter;
