const FilterModal = () => {
  return (
    <div
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
          id="filter-modal-checkbox"
          className="w-6 h-6 bg-[#19202D] opacity-10"
        ></div>
        <span id="filter-modal-contract">Full Time Only</span>
      </div>
      <button className="w-[279px] bg-[#5964E0]" id="filter-modal-btn">
        Search
      </button>
    </div>
  );
};

export default FilterModal;
