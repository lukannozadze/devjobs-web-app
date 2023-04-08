import ModeToggler from "../UI/ModeToggler";
import { MoonIcon } from "../UI/MoonIcon";
import SunIcon from "../UI/SunIcon";

const Header = () => {
  return (
    <div className="w-screen flex justify-between items-start  px-6 h-[136px] bg-blue-500">
      <h1>devjobs</h1>
      <div className="flex items-center">
        <SunIcon />
        <ModeToggler />
        <MoonIcon />
      </div>
    </div>
  );
};

export default Header;