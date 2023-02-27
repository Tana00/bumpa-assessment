import { EmptyStateImage } from "assets";

export const EmptyState = ({
  handleRefetch,
}: {
  handleRefetch: () => void;
}) => {
  return (
    <main className="h-full w-full flex flex-col justify-center items-center mt-10 p-10">
      <div className="w-52 h-52 my-5 flex items-center justify-center">
        <EmptyStateImage />
      </div>
      <div className="px-2 text-lg">No search result.</div>
      <button
        onClick={() => handleRefetch()}
        className="mt-5 relative block px-8 py-3 bg-transparent text-customGreen1 hover:bg-customGreen1/10 border-2 rounded border-customGreen1/50"
      >
        Refresh
      </button>
    </main>
  );
};
