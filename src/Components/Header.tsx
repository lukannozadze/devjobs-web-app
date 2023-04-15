import ModeToggler from "../UI/ModeToggler";
import { MoonIcon } from "../UI/MoonIcon";

import SunIcon from "../UI/SunIcon";
const Header = () => {
  return (
    <div
      className="w-screen flex justify-between items-start  px-6 pt-[32px] h-[136px] bg-blue-500"
      style={{
        backgroundImage: "url(/assets/mobile/bg-pattern-header.svg)",
      }}
    >
      <img src="/assets/title.png" />
      <div className="flex items-center gap-4">
        <SunIcon />
        <ModeToggler />
        <MoonIcon />
      </div>
    </div>
  );
};

export default Header;
