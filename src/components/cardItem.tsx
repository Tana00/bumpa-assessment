import { CountryInterface } from "interface";
import { useNavigate } from "react-router-dom";
import { _formatNumber } from "utils";

export const CardItem = ({
  name,
  flags,
  region,
  capital,
  population,
}: CountryInterface) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`${name?.common}`)}
      className="bg-white shadow-sm dark:shadow-none pb-4 dark:bg-gray-800 md:w-80 lg:w-72 w-full rounded cursor-pointer hover:shadow-xl"
    >
      <div className="h-44 w-full">
        <img
          src={flags?.png}
          alt={`${name?.common} flag`}
          className="w-full h-full"
        />
      </div>
      <div className="py-6 px-8">
        <p className="text-lg font-bold my-2">{name?.common}</p>
        <div className="text-sm font-semibold text-customGray5 space-y-2 mt-2">
          <p>
            Population:
            <span className="text-customGray4 pl-2 font-medium">
              {_formatNumber(population)}
            </span>
          </p>
          <p>
            Region:
            <span className="text-customGray4 pl-2 font-medium">{region}</span>
          </p>
          <p>
            Capital:
            <span className="text-customGray4 pl-2 font-medium">{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
