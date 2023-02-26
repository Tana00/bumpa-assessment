import { useContext } from "react";
import { Header, Footer } from ".";
import { ChildrenProp } from "interface";
import { ThemeContext } from "contexts/theme-context";

export const Master = ({ children }: ChildrenProp) => {
  const { mode } = useContext(ThemeContext);
  return (
    <div
      className={`${
        mode !== true ? "bg-customGray1" : "bg-slate-900"
      } max-w-8xl mx-auto`}
    >
      <Header />
      <div className="px-10 lg:px-20">{children}</div>
      <Footer />
    </div>
  );
};
