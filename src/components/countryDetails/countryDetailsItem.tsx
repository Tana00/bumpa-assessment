import { useNavigate } from "react-router-dom";
import { CountryInterface } from "interface";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { _formatNumber } from "utils";
import { UseQueryResult, useQuery } from "react-query";
import { getCountriesByCodes } from "requests";

interface Props {
  data: CountryInterface;
}

export const CountryDetailsItem = ({ data }: Props) => {
  const navigate = useNavigate();

  const countryCodes = data?.borders;
  const query = countryCodes ? countryCodes?.join(",") : null;

  console.log("borders", data?.borders, query);

  const {
    data: borderCountriesData,
  }: UseQueryResult<CountryInterface[], Error> = useQuery({
    queryKey: ["getCountriesByCodes", countryCodes],
    queryFn: () => getCountriesByCodes(query),
    refetchOnWindowFocus: false,
  });

  return (
    <div className="lg:flex items-start justify-start w-full">
      <div
        className={`bg-cover bg-center bg-no-repeat lg:w-1/2 w-full lg:h-[40rem] lg:min-h-screen h-[20rem]`}
        style={{ backgroundImage: `url(${data?.flags?.svg})` }}
      ></div>

      <div className="lg:my-5 mx-5 lg:ml-20 py-10 lg:w-1/2 w-full px-5 lg:px-0">
        <div>
          {/* back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center dark:text-customGray5 hover:text-customGray8 hover:dark:text-customGray4 text-customGray7 font-semibold py-2 border-none"
          >
            <MdOutlineArrowBackIosNew className="fill-current w-4 h-4 mr-2" />
            <span>Go Back</span>
          </button>
          <h1 className="md:text-[3.8rem] text-4xl leading-tight lg:font-light font-medium mb-10">
            <span className="text-customGray6 dark:text-customGray2">
              {data?.name?.official}
            </span>
            {data?.coatOfArms?.png && (
              <img
                src={data?.coatOfArms?.png}
                alt="coat of arms"
                className="w-10 h-10 mt-2"
              />
            )}
          </h1>
          <div className="grid grid-cols-2 gap-y-5 text-customGray6 dark:text-customGray2">
            <div>
              <p className="text-xs uppercase font-medium">Common Name</p>
              <p className="dark:text-customGray4 text-customGray8 text-lg mt-1">
                {data?.name?.common}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase font-medium">Capital</p>
              <p className="dark:text-customGray4 text-customGray8 text-lg mt-1">
                {data?.capital[0]}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase font-medium">Region</p>
              <p className="dark:text-customGray4 text-customGray8 text-lg mt-1">
                {data?.region}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase font-medium">Subregion</p>
              <p className="dark:text-customGray4 text-customGray8 text-lg mt-1">
                {data?.subregion}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase font-medium">Population</p>
              <p className="dark:text-customGray4 text-customGray8 text-lg mt-1">
                {_formatNumber(data?.population)}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase font-medium">Currencies</p>
              {Object.values(data?.currencies)?.map(
                ({ name, symbol }: any, i) => (
                  <p
                    key={i}
                    className="dark:text-customGray4 text-customGray8 text-lg mt-1"
                  >
                    {name} - {symbol}
                  </p>
                )
              )}
            </div>
            <div>
              <p className="text-xs uppercase font-medium">Language</p>
              {Object.values(data?.languages)?.map(
                (language: string | any, i) => (
                  <p
                    key={i}
                    className="dark:text-customGray4 text-customGray8 text-lg mt-1"
                  >
                    {language}
                  </p>
                )
              )}
            </div>
            <div>
              <p className="text-xs uppercase font-medium">Timezone</p>
              <p className="dark:text-customGray4 text-customGray8 text-lg mt-1">
                {data?.timezones[0]}
              </p>
            </div>
            <div>
              <p className="text-xs uppercase font-medium">Border Countries</p>
              {borderCountriesData?.map(
                (borderCountry: { name: { common: any }; flag?: any }) => (
                  <p className="dark:text-customGray4 text-customGray8 text-lg my-1">
                    {`${borderCountry?.name?.common} ${borderCountry?.flag}`}
                  </p>
                )
              )}
            </div>
            <div>
              <p>
                <a
                  href={data?.maps?.googleMaps}
                  target="_blank"
                  className="underline hover:text-customGray4"
                >
                  View on map
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
