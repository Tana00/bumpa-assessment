import { Skeleton, Box } from "@mui/material";

export const CardItemSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded w-full">
      <Box sx={{ height: "10rem" }}>
        <Skeleton animation="wave" variant="rectangular" height={"100%"} />
      </Box>
      <div className="py-6 px-8">
        <Skeleton
          animation="wave"
          width="70%"
          height="1.5rem"
          variant="text"
          className="text-lg font-bold my-2"
        />
        <div className="text-sm font-semibold text-gray-500 space-y-2 mt-2">
          <Skeleton animation="wave" width="50%" height="1rem" variant="text" />
          <Skeleton animation="wave" width="50%" height="1rem" variant="text" />
          <Skeleton animation="wave" width="40%" height="1rem" variant="text" />
        </div>
      </div>
    </div>
  );
};
