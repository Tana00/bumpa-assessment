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
            {/* <div className="lg:h-[40rem] h-[20rem] lg:rounded-br-3xl dark:bg-customGray1 bg-white"> */}
            <div
              className={`lg:w-1/2 w-full bg-auto bg-center bg-no-repeat lg:h-[40rem] h-[20rem] lg:rounded-br-3xl dark:bg-customGray1 bg-white`}
              style={{ backgroundImage: `url(${data?.flags?.png})` }}
            ></div>
            {/* </div> */}
            <div className="lg:my-10 mx-5 lg:ml-20 py-10 lg:w-1/2 w-full">
              <div>
                {/* back button */}
                <button
                  onClick={() => navigate(-1)}
                  className="flex items-center justify-center dark:text-gray-500 hover:text-gray-900 hover:dark:text-gray-400 text-gray-700 font-semibold py-2 border-none"
                >
                  <MdOutlineArrowBackIosNew className="fill-current w-4 h-4 mr-2" />
                  <span>Go Back</span>
                </button>
                <h1 className="text-[3.8rem] leading-10 font-light my-10 flex items-center">
                  <span>{data?.name?.common}</span>
                  {data?.coatOfArms?.png && (
                    <img
                      src={data?.coatOfArms?.png}
                      alt="coat of arms"
                      className="w-7 h-7 ml-4 mt-2"
                    />
                  )}
                </h1>
                <div className="grid grid-cols-2 gap-y-5">
                  <div>
                    <p className="text-xs uppercase font-semibold">
                      Official Name
                    </p>
                    <p className="text-gray-400 text-lg">
                      {data?.name?.official}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-semibold">Capital</p>
                    <p className="text-gray-400">{data?.capital[0]}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-semibold">Region</p>
                    <p className="text-gray-400">{data?.region}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-semibold">Subregion</p>
                    <p className="text-gray-400">{data?.subregion}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-semibold">
                      Population
                    </p>
                    <p className="text-gray-400">
                      {_formatNumber(data?.population)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-semibold">
                      Currencies
                    </p>
                    {Object.values(data?.currencies)?.map(
                      ({ name, symbol }: any, i) => (
                        <p key={i} className="text-gray-400">
                          {name} - {symbol}
                        </p>
                      )
                    )}
                    {/* {data?.currencies?.EUR?.name} -{" "}
                    {data?.currencies?.EUR?.symbol} */}
                  </div>
                  <div>
                    <p className="text-xs uppercase font-semibold">Language</p>
                    <p className="text-gray-400">{data?.languages.swe}</p>
                    {Object.values(data?.languages)?.map(
                      (language: string | any, i) => (
                        <p key={i} className="text-gray-400">
                          {language}
                        </p>
                      )
                    )}
                  </div>
                  <div>
                    <p className="text-xs uppercase font-semibold">
                      Is Independent
                    </p>
                    <p className="text-gray-400">
                      {data?.independent === true ? "Yes" : "No"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-semibold">Timezone</p>
                    <p className="text-gray-400">{data?.timezones[0]}</p>
                  </div>
                  <div>
                    <p>
                      <a
                        href={data?.maps?.googleMaps}
                        target="_blank"
                        className="underline hover:text-gray-500"
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
