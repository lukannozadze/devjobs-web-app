import ModeToggler from "../UI/ModeToggler";
import { MoonIcon } from "../UI/MoonIcon";
import { useMediaQuery } from "react-responsive";
import SunIcon from "../UI/SunIcon";

const Header = (props: {
  setActive: (active: number) => void;
  setIsDark: (isDark: boolean) => void;
  isDark: boolean;
}) => {
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 768px)" });
  const headerImgPath = isTabletOrMobile
    ? "/assets/tablet/bg-pattern-header.svg"
    : "/assets/mobile/bg-pattern-header.svg";
  return (
    <div
      className="w-screen flex justify-between items-start  px-6 pt-[32px] h-[136px] bg-blue-500 cursor-pointer md:px-12 md:rounded-bl-[70px]"
      style={{
        backgroundImage: `url(${headerImgPath})`,
      }}
    >
      <img
        onClick={() => {
          props.setActive(0);
        }}
        src="/assets/title.png"
      />
      <div className="flex items-center gap-4">
        <SunIcon />
        <ModeToggler setIsDark={props.setIsDark} isDark={props.isDark} />
        <MoonIcon />
      </div>
    </div>
  );
};

export default Header;
