import { useEffect, useState } from "react";

function DropDown({ setDropValue}:{ setDropValue: React.Dispatch<React.SetStateAction<string>>}) {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["All", "Complete", "Incomplete"];
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option: any) => {
    setSelectedValue(option);
    setIsOpen(false);
  };
  useEffect(()=>{
    setDropValue(selectedValue)
  },[selectedValue])

  return (
    <div className="relative">
      <div onClick={toggleDropdown}>
        <div className="p-[10px] text-[18px] text-light font-bold bg-main flex gap-[27px] items-center  rounded-[5px]">
          {selectedValue}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="5"
            viewBox="0 0 8 5"
            fill="none"
          >
            <path
              d="M4 4L1 1"
              stroke="#F7F7F7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 1L4 4"
              stroke="#F7F7F7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <ul className="absolute  z-50 text-main  bg-light rounded-[5px] border border-main">
          {options.map((option, index) => (
            <li className="hover:bg-halfmain text-[16px]" key={index} onClick={() => selectOption(option)}>
              <div className="px-[5px]">
                {option}
              </div> 
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDown;
