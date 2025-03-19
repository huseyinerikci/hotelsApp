import { FC } from "react";
import { sortOptions } from "../../utils/constants";
import { getPlaces } from "../../utils/service";
import { useSearchParams } from "react-router-dom";
const Filter: FC = () => {
  const { data } = getPlaces();
  const [searchParams, setSearchParams] = useSearchParams();
  //üç nokta ile set objesini diziye çevirip benzersiz bir dizi oluşturma
  const locations = [...new Set(data?.map((i) => i.location))];

  //url parametre ekle
  const handleChange = (name: string, value: string): void => {
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };
  return (
    <form className="flex flex-col gap-4 lg:gap-10 lg:mt-15 lg:sticky lg:top-10">
      <div className="field">
        <label htmlFor="">Nereye gitmek istersiniz?</label>
        <select
          className="input"
          value={searchParams.get("location") || ""}
          onChange={(e) => handleChange("location", e.target.value)}
        >
          <option value="" disabled>
            Seçiniz
          </option>
          {locations?.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="">Konaklama yerine göre ara</label>
        <input
          type="text"
          placeholder="örn:Seaside Villa"
          className="input"
          value={searchParams.get("title") || ""}
          onChange={(e) => handleChange("title", e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="">Sıralama Ölçütü</label>
        <select
          className="input"
          value={searchParams.get("order") || ""}
          onChange={(e) => handleChange("order", e.target.value)}
        >
          {sortOptions.map((i) => (
            <option
              key={i.value}
              value={i.value}
              disabled={i.label === "Seçiniz"}
            >
              {i.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => setSearchParams({})}
          className="bg-blue-500 text-white px-4 py-1 w-fit rounded-md cursor-pointer"
        >
          Filtreleri Temizle
        </button>
      </div>
    </form>
  );
};

export default Filter;
