import { useNavigate, useLocation } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { CountryInterface } from "interface";
import { UseQueryResult, useQuery } from "react-query";
import { getCountryDetails } from "requests";
import { _formatNumber } from "utils";
import { CountryDetailsSkeleton } from ".";

export const CountryDetailsComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const countryName = location?.pathname?.slice(1);

  const {
    isLoading: countryLoading,
    data: countryData,
  }: UseQueryResult<CountryInterface[], Error> = useQuery({
    queryKey: ["getCountryDetails", countryName],
    queryFn: () =>
      getCountryDetails({
        name: countryName,
      }),
    refetchOnWindowFocus: false,
  });

  return (
    <div className="">
      {countryLoading ? (
        <CountryDetailsSkeleton />
      ) : (
        countryData?.map((data, i) => (
          <div key={i} className="lg:flex items-start justify-start w-full">
            <div
              className={`lg:w-1/2 w-full bg-cover bg-center bg-no-repeat lg:h-[40rem] lg:min-h-screen h-[20rem] lg:rounded-br-3xl`}
              style={{ backgroundImage: `url(${data?.flags?.svg})` }}
            ></div>
            <div className="lg:my-10 mx-5 lg:ml-20 py-10 lg:w-1/2 w-full px-5 lg:px-0">
              <div>
                {/* back button */}
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center justify-center dark:text-customGray5 hover:text-customGray8 hover:dark:text-customGray4 text-customGray7 font-semibold py-2 border-none"
                >
                  <MdOutlineArrowBackIosNew className="fill-current w-4 h-4 mr-2" />
                  <span>Go Back</span>
                </button>
                <h1 className="md:text-[3.8rem] text-4xl leading-tight lg:font-light font-medium my-10">
                  <span className="text-customGray6 dark:text-customGray2">
                    {data?.name?.official}
                  </span>
                  {data?.coatOfArms?.png && (
                    <img
                      src={data?.coatOfArms?.png}
                      alt="coat of arms"
                      className="w-7 h-7 ml-4 mt-2"
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
                    <p className="text-xs uppercase font-medium">
                      Is Independent
                    </p>
                    <p className="dark:text-customGray4 text-customGray8 text-lg mt-1">
                      {data?.independent === true ? "Yes" : "No"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-medium">Timezone</p>
                    <p className="dark:text-customGray4 text-customGray8 text-lg mt-1">
                      {data?.timezones[0]}
                    </p>
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
        ))
      )}
    </div>
  );
};
