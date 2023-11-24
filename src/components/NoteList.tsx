import { Data } from "../App";
import Note from "./Note";

function NoteList({
  data,
  setData,
}: {
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
}) {
  return (
    <div className="h-full w-full flex flex-col item-center">
      {data.map((item, index) => {
        return <Note setData={setData} item={item} key={index} />;
      })}
    </div>
  );
}

export default NoteList;
