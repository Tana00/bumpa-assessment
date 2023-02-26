import { useContext } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "contexts/theme-context";

export const ToggleDarkMode = () => {
  const { mode, toggleMode } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleMode}
      className="cursor-pointer flex items-center space-x-1"
    >
      <MdOutlineDarkMode className="w-5 h-5" />
      <span className="text-sm">{mode === true ? "Light" : "Dark"} Mode</span>
    </div>
  );
};
