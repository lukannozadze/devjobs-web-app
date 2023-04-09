import { useState, useEffect } from "react";
import CorrectIcon from "./CorrectIcon";
const FilterModal = (props: {
  setModalState: (modalState: {
    locationValue: string;
    isChecked: boolean;
    isSubmitted: boolean;
  }) => void;
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [obj, setObj] = useState({
    locationValue: "",
    isChecked: false,
    isSubmitted: false,
  });
  useEffect(() => {
    props.setModalState(obj);
  }, [obj]);
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
        onChange={(e) => {
          setObj({ ...obj, locationValue: e.target.value });
        }}
      />
      <div
        id="filter-modal-checkbox-container"
        className="flex items-center self-start pl-6 "
      >
        <div
          onClick={() => {
            setIsChecked(!isChecked);
            setObj({ ...obj, isChecked: !isChecked });
          }}
          id="filter-modal-checkbox"
          className={`w-6 h-6 ${
            !isChecked ? "bg-[#19202D] opacity-10 " : "bg-[#5964E0]  "
          } flex justify-center items-center`}
        >
          {isChecked && <CorrectIcon setModalState={props.setModalState} />}
        </div>
        <span id="filter-modal-contract">Full Time Only</span>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setObj({ ...obj, isSubmitted: true });
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
