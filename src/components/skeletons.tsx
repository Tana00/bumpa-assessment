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
        <div className="text-sm font-semibold text-customGray5 space-y-2 mt-2">
          <Skeleton animation="wave" width="50%" height="1rem" variant="text" />
          <Skeleton animation="wave" width="50%" height="1rem" variant="text" />
          <Skeleton animation="wave" width="40%" height="1rem" variant="text" />
        </div>
      </div>
    </div>
  );
};

export const CountryDetailsSkeleton = () => {
  return (
    <div className="lg:flex items-start justify-start w-full">
      <Box className="lg:h-[40rem] lg:min-h-screen h-56 lg:w-1/2 w-full lg:rounded-br-3xl">
        <Skeleton animation="wave" variant="rectangular" height={"100%"} />
      </Box>
      <div className="lg:my-10 mx-5 lg:ml-20 py-10 lg:w-1/2 w-full">
        <Skeleton
          animation="wave"
          width="15%"
          height="1rem"
          variant="text"
          className="py-2"
        />
        <Skeleton
          animation="wave"
          width="70%"
          height="1.5rem"
          variant="text"
          className="text-lg font-bold py-5"
        />
        <div className="grid grid-cols-2 gap-y-8 mt-5">
          {[...Array(8)]?.map((_item, i) => (
            <div key={i}>
              <Skeleton
                animation="wave"
                width="60%"
                height="1rem"
                variant="text"
                className="py-2"
              />
              <Skeleton
                animation="wave"
                width="65%"
                height="1.1rem"
                variant="text"
                className="py-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
