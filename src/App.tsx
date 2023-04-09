import Header from "./Components/Header";
import LandingPage from "./Pages/LandingPage";
import { useState } from "react";
import FilterModal from "./UI/FilterModal";
function App() {
  const [isFilterClicked, setIsFilterClicked] = useState<boolean>(false);
  const [modalState, setModalState] = useState<{
    locationValue: string;
    isChecked: boolean;
    isSubmitted: boolean;
  }>({
    locationValue: "",
    isChecked: false,
    isSubmitted: false,
  });
  console.log(modalState);
  return (
    <div className="min-h-screen max-h-fit bg-[#F2F2F2] relative">
      {isFilterClicked && (
        <div
          onClick={(event) => {
            const target = event.target as Element;
            console.log(target);
            if (!target.id.includes("filter-modal")) {
              setIsFilterClicked(false);
            }
          }}
          className="w-[100%] h-[100%] bg-black absolute bg-opacity-[85%] z-10 flex justify-center  "
        >
          <FilterModal setModalState={setModalState} />
        </div>
      )}
      <Header />
      <LandingPage
        setIsFilterClicked={setIsFilterClicked}
        modalState={modalState}
      />
    </div>
  );
}

export default App;
