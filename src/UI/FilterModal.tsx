import { useState } from "react";
import CorrectIcon from "./CorrectIcon";

const FilterModal = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <form
      id="filter-modal"
      className="w-[87.2%] bg-white h-[217px] absolute top-[225px] flex flex-col items-center gap-[28px]  "
    >
      <input
        id="filter-modal-input"
        type="text"
        placeholder="Filter by location"
        className="w-[100%] pl-6"
      />
      <div
        id="filter-modal-checkbox-container"
        className="flex items-center self-start pl-6 "
      >
        <div
          onClick={() => {
            setIsChecked(!isChecked);
          }}
          id="filter-modal-checkbox"
          className={`w-6 h-6 ${
            !isChecked ? "bg-[#19202D] opacity-10 " : "bg-[#5964E0]  "
          } flex justify-center items-center`}
        >
          {isChecked && <CorrectIcon />}
        </div>
        <span id="filter-modal-contract">Full Time Only</span>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className="w-[279px] bg-[#5964E0]"
        id="filter-modal-btn"
      >
        Search
      </button>
    </form>
  );
};

export default FilterModal;
