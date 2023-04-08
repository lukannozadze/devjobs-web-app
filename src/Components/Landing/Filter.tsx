import FilterIcon from "../../UI/FilterIcon";
import SearchIcon from "../../UI/SearchIcon";
const Filter = () => {
  return (
    <form className="flex justify-center -translate-y-[50%]">
      <div className="w-[327px] relative">
        <input
          className="py-[32px] w-[100%] pl-6"
          type="text"
          placeholder="Filter by title..."
        />
        <FilterIcon class="absolute top-[30px] right-[88px]" />
        <SearchIcon class="absolute top-[16px] right-4" />
      </div>
    </form>
  );
};

export default Filter;
