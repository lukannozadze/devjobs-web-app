import { useState, useEffect } from "react";
import CorrectIcon from "./CorrectIcon";
import LocationIcon from "./LocationIcon";
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
      className="w-[87.2%] bg-white font-kumbh h-[217px] absolute top-[225px] flex flex-col items-center gap-[23px] rounded-md pt-6"
    >
      <div className="flex self-start pl-6">
        <LocationIcon />
        <input
          id="filter-modal-input"
          type="text"
          placeholder="Filter by location"
          className="w-[65%] pl-6 outline-none"
          onChange={(e) => {
            setObj({ ...obj, locationValue: e.target.value });
          }}
        />
      </div>
      <div className="w-[100%] h-[1px] bg-[#6E8098] opacity-20"></div>
      <div
        id="filter-modal-checkbox-container"
        className="flex items-center self-start pl-6 gap-4 "
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
        <span
          id="filter-modal-contract"
          className="text-base leading-[19.84px] font-bold"
        >
          Full Time Only
        </span>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setObj({ ...obj, isSubmitted: true });
        }}
        className="w-[279px] bg-[#5964E0] py-4 text-base leading-[19.84px] text-white font-bold rounded-[5px] "
        id="filter-modal-btn"
      >
        Search
      </button>
    </form>
  );
};

export default FilterModal;
