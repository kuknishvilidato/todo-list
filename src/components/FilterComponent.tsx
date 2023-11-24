import Search from "./Search";
import DropDown from "./DropDown";
import Button from "./Button";
import { useEffect, useState } from "react";
import { Data } from "../App";

function FilterComponent({
  setFilterData,
  data
}: {
  setFilterData: React.Dispatch<React.SetStateAction<Data[]>>;
  data: Data[];
}) {
  const [search, setSearch] = useState<string>("");
  const [dropValue, setDropValue] = useState<string>("");




  useEffect(() => {
    console.log(data)
    const filteredTodos = data.filter((item) => {
      const matchesSearch = item.content.toLowerCase().includes(search.toLowerCase());

      if (dropValue === "All") {
        return matchesSearch;
      } else if (dropValue === "Complete") {
        return item.complete === true && matchesSearch;
      } else if (dropValue === "Incomplete") {
        return item.complete === false && matchesSearch;
      }

      return true;
    });
    setFilterData(filteredTodos);
  }, [search, dropValue, data, setFilterData]);

  return (
    <div className="flex justify-center mb-[13px]">
      <div className="flex w-full max-w-[750px] gap-[16px]">
        <Search search={search} setSearch={setSearch} />
        <DropDown setDropValue={setDropValue} />
        <Button />
      </div>
    </div>
  );
}

export default FilterComponent;
