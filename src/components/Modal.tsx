import React, { useState } from "react";
import { Data } from "../App";

const Modal = ({
  title,
  setData,
  isOpen,
  setIsOpen,
  value,
  data,
}: {
  title: string;
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  value?: string;
  data?: Data;
}) => {
  const [inputValue, setInputValue] = useState(value || "");

  const completeHandler = (e: Data[]) => {
    return e.map((i) => {
      if (i.id === data?.id) {
        return { ...i, content: inputValue };
      }
      return i;
    });
  };

  const hadleAplay = () => {
    if (title === "New") {
      const newData: Data = {
        id: Math.random() + Math.random() + Math.random(),

        content: inputValue,
        complete: false,
      };
      setInputValue("");
      setData((e) => [...e, newData]);
    } else {
      setData((e) => completeHandler(e));
    }
    setIsOpen((e) => !e);
  };

  return (
    <div className="flex  justify-center items-center ">
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-dark p-8  rounded-[16px] shadow-lg w-1/3">
            <h2 className="text-xl font-bold text-center mb-[25px] dark:text-light ">
              {title} Note
            </h2>
            <div className="flex border rounded-[5px] border-main w-full py-[11px] px-[16px]">
              <input
                value={inputValue}
                type="text"
                className="all-reset w-full dark:text-light"
                placeholder="Input your note..."
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
              />
            </div>
            <div className="flex justify-between mt-[128px]">
              <button
                onClick={() => setIsOpen((e) => !e)}
                className="bg-light dark:bg-dark border border-main text-main px-[22px] py-[10px] font-bold rounded-[5px]"
              >
                CANCEL
              </button>
              <button
                onClick={hadleAplay}
                className="bg-main text-light px-[22px] py-[10px] font-bold rounded-[5px]"
              >
                APPLAY
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
