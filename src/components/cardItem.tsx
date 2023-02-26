export const CardItem = () => {
  return (
    <div className="bg-white shadow-sm dark:shadow-none dark:bg-gray-800 w-fit rounded cursor-pointer hover:shadow-xl">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAElBMVEUAAAD/zgDdAADnAADaAAD/2AAtsSEoAAAA+ElEQVR4nO3QMQGAMAAEsYeCf8tIuI0pkZANAAAAAAAAAAAAAAAAAAAAgB8dwm6CoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKewh7CbsIipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUqKkqKkKClKipKipCgpSoqSoqQoKUofMGTNC8HkSxoAAAAASUVORK5CYII="
        alt="country flag"
      />
      <div className="py-6 px-8">
        <p className="text-lg font-bold my-2">Germany</p>
        <div className="text-sm font-semibold text-gray-500 space-y-2 mt-2">
          <p>
            Population:
            <span className="text-gray-400 pl-2 font-medium">81,770,900</span>
          </p>
          <p>
            Region:
            <span className="text-gray-400 pl-2 font-medium">Europe</span>
          </p>
          <p>
            Capital:
            <span className="text-gray-400 pl-2 font-medium">Berlin</span>
          </p>
        </div>
      </div>
    </div>
  );
};
