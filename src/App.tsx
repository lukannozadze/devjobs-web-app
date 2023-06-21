import Header from "./Components/Header";
import LandingPage from "./Pages/LandingPage";
import { useState } from "react";
import FilterModal from "./UI/FilterModal";
import DetailPage from "./Pages/DetailPage";
function App() {
  const [isFilterClicked, setIsFilterClicked] = useState<boolean>(false);
  const [active, setActive] = useState<number>(0);
  const [isDark, setIsDark] = useState<boolean>(false);
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
    <div
      className={`min-h-screen max-h-fit  relative font-kumbh overflow-x-hidden ${
        isDark ? "bg-[#121721]" : "bg-[#F2F2F2]"
      } duration-500`}
    >
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
          <FilterModal setModalState={setModalState} isDark={isDark} />
        </div>
      )}
      <Header setActive={setActive} setIsDark={setIsDark} isDark={isDark} />
      {active === 0 ? (
        <LandingPage
          setIsFilterClicked={setIsFilterClicked}
          modalState={modalState}
          setModalState={setModalState}
          setActive={setActive}
          isDark={isDark}
        />
      ) : (
        <DetailPage active={active} isDark={isDark} />
      )}
    </div>
  );
}

export default App;
