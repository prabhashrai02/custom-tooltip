import React, { useState } from "react";

import styles from "./inputDropdown.module.css";

const InputDropdown = (props: DropdownProps) => {
  const { label, options, selectedValue, onDropdownValueChange } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (option: string) => {
    onDropdownValueChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <label> {label} </label>

      <div className={styles.dropdownToggle} onClick={() => setIsOpen(!isOpen)}>
        {selectedValue ? selectedValue : "Select an option"}
        {isOpen ? <span> &#9651; </span> : <span> &#9661; </span>}
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

type DropdownProps = {
  label: string;
  options: string[];
  selectedValue: string;
  onDropdownValueChange: (value: string) => void;
};

export default InputDropdown;
