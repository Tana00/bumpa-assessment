import { EmptyStateImage } from "assets";
import { Dispatch, SetStateAction } from "react";

export const EmptyState = ({
  handleRefetch,
}: {
  handleRefetch: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <main className="h-full w-full flex flex-col justify-center items-center mt-10 p-10">
      <div className="w-52 h-52 my-5 flex items-center justify-center">
        <EmptyStateImage />
      </div>
      <div className="px-2 text-lg">No search result.</div>
      <button className="mt-5">
        <a className="relative inline-block text-sm font-medium text-[#009444] group active:text-[#009444]/50 focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#009444] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span
            onClick={() => handleRefetch}
            className="relative block px-8 py-3 bg-[#1A2238] text-gray-300 border rounded-sm border-current cursor-pointer"
          >
            Refresh
          </span>
        </a>
      </button>
    </main>
  );
};
