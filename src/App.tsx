import Header from "./Components/Header";
import LandingPage from "./Pages/LandingPage";
import { useState } from "react";
import FilterModal from "./UI/FilterModal";
import DetailPage from "./Pages/DetailPage";
function App() {
  const [isFilterClicked, setIsFilterClicked] = useState<boolean>(false);
  const [active, setActive] = useState<number>(0);
  const [modalState, setModalState] = useState<{
    locationValue: string;
    isChecked: boolean;
    isSubmitted: boolean;
  }>({
    locationValue: "",
    isChecked: false,
    isSubmitted: false,
  });

  return (
    <div className="min-h-screen max-h-fit bg-[#F2F2F2] relative font-kumbh">
      {isFilterClicked && (
        <div
          onClick={(event) => {
            const target = event.target as Element;

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
      {active === 0 ? (
        <LandingPage
          setIsFilterClicked={setIsFilterClicked}
          modalState={modalState}
          setActive={setActive}
        />
      ) : (
        <DetailPage active={active} />
      )}
    </div>
  );
}

export default App;
