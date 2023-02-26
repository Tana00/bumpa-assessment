import { CardItem, CardItemSkeleton } from ".";

export const Card = () => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
        {[...Array(6)].map((_item, i) => (
          <CardItemSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
