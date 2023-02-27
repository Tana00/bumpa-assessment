import { Header } from ".";
import { ChildrenProp } from "interface";

export const Master = ({ children }: ChildrenProp) => {
  return (
    <div className="bg-customGray1 dark:bg-slate-900 max-w-8xl min-h-screen mx-auto">
      <Header />
      <div className="px-10 lg:px-20">{children}</div>
    </div>
  );
};
