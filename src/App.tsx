import { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import FilterComponent from "./components/FilterComponent";
import AddButton from "./components/AddButton";
import Empty from "./components/Empty";

export interface Data {
  id: number;
  content: string;
  complete: boolean;
}

function App() {
  const [data, setData] = useState<Data[]>([]);

  const [filterData, setFilterData] = useState<Data[]>([]);
  const [mainData, setMainData] = useState<Data[]>([]);

  useEffect(() => {
    if (filterData.length === 0) {
      setMainData(data);
    } else {
      setMainData(filterData);
    }
  }, [data, filterData]);

  return (
    <div className="">
      <h1 className="mt-[40px] dark:text-light mb-[18px] text-dark font-bold text-center text-[26px]">
        TODO LIST
      </h1>
      <FilterComponent setFilterData={setFilterData} data={data} />
      <div className="flex w-full h-full items-center relative flex-col">
        {data.length !== 0 ? (
          <NoteList data={mainData} setData={setData} />
        ) : (
          <Empty />
        )}
      </div>
      <AddButton setData={setData} />
    </div>
  );
}

export default App;
