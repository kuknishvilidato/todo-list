import { useState } from "react";
import Delete from "./Delete";
import Edit from "./Edit";
import Checkbox from "./Checkbox";
import { Data } from "../App";
import Modal from "./Modal";

function Note({
  item,
  setData,
}: {
  item: Data;
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const deleteHendler = () => {
    setData((e) => [...e].filter((note) => note !== item));
  };
  const editHendler = () => {
    setIsOpen((e) => !e);
  };

  const completeHandler = (e: Data[]) => {
    return e.map((i) => {
      if (i.id === item.id) {
        return { ...i, complete: !item.complete };
      }
      return i;
    });
  };

  return (
    <>
      <div className="flex py-[20px] border-b-[1px] items-center justify-between w-full max-w-[520px] ">
        <label
          onClick={() => setData((e) => completeHandler(e))}
          className="flex  align-middle justify-center items-center gap-[17px]"
          htmlFor="check"
        >
          <Checkbox ischecked={item.complete} />

          <span
            className={` dark:text-light text-dark font-bold text-[20px] ${
              item.complete && "text-grey line-through"
            }`}
          >
            {item.content}
          </span>
        </label>
        <div className="flex gap-[10px]">
          <button onClick={editHendler}>
            <Edit />
          </button>
          <button onClick={deleteHendler}>
            <Delete />
          </button>
        </div>
      </div>
      <Modal
        title={"Edit"}
        setData={setData}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        value={item.content}
        data={item}
      />
    </>
  );
}
// form-checkbox text-indigo-600

export default Note;
