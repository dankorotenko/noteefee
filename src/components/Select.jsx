import React, { useState, useEffect, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";

import useClickOutside from '../hooks/useClickOutside'
export default function Select({ className, options }) {
  const ref = useRef(null);
  const [opened, setOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOpen = () => {
    opened ? setOpened(false) : setOpened(true);
  };
  const handleOption = (option) => {
    setSelectedOption(option)
    setOpened(false)
  }

  useClickOutside(ref, () => setOpened(false))

  return (
    <div className={`select ${className}`}>
      <div className="select-outside" onClick={() => handleOpen()}>
        {selectedOption} <BsChevronDown color="#8c5ae8" />
      </div>
      <ul ref={ref} className={`select-inside ${opened && "opened"}`}>
        {options.map((option) => (
          <li className={`${selectedOption === option ? 'active' : ''}`} key={option} value={option} onClick={()=> handleOption(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
