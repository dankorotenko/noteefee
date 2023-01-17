import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
export default function Select({ className, options }) {
  const [opened, setOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOpen = () => {
    opened ? setOpened(false) : setOpened(true);
  };
  const handleOption = (option) => {
    setSelectedOption(option)
    setOpened(false)
  }

  return (
    <div className={`select ${className}`}>
      <div className="select-outside" onClick={() => handleOpen()}>
        {selectedOption} <BsChevronDown color="#8c5ae8" />
      </div>
      <ul className={`select-inside ${opened && "opened"}`}>
        {options.map((option) => (
          <li className={`${selectedOption === option ? 'active' : ''}`} key={option} value={option} onClick={()=> handleOption(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
