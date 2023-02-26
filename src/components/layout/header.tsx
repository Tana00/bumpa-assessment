import { ToggleDarkMode } from "../toggleDarkMode";

export const Header = () => {
  return (
    <div className="shadow w-full flex items-center justify-between px-10 py-8 lg:px-20">
      <p className="font-semibold text-lg">Where in the world?</p>
      <ToggleDarkMode />
    </div>
  );
};
