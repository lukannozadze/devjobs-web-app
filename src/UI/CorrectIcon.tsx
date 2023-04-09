const CorrectIcon = (props: {
  setModalState: (modalState: {
    locationValue: string;
    isChecked: boolean;
    isSubmitted: boolean;
  }) => void;
}) => {
  return (
    <div onClick={() => {}} id="filter-modal-checkbox-icon-container">
      <svg
        width="15"
        height="12"
        viewBox="0 0 15 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="filter-modal-checkbox-icon"
      >
        <path
          d="M1 6.56948L4.57248 10.142L13.7144 1"
          stroke="white"
          strokeWidth="2"
          id="filter-modal-checkbox-icon-path"
        />
      </svg>
    </div>
  );
};
export default CorrectIcon;
