import { CardItem, CardItemSkeleton } from ".";
import { CountryInterface } from "interface";

interface Props {
  onClick: (data: CountryInterface) => void;
  item: CountryInterface[];
  loading: boolean;
}

export const Card = ({ onClick, item, loading }: Props) => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
        {loading
          ? [...Array(8)].map((_item, i) => <CardItemSkeleton key={i} />)
          : item?.map(
              (
                { name, flags, region, capital, population }: CountryInterface,
                i: number
              ) => (
                <CardItem
                  key={i}
                  name={name}
                  population={population}
                  capital={capital}
                  region={region}
                  flags={flags}
                />
              )
            )}
      </div>
    </div>
  );
};
