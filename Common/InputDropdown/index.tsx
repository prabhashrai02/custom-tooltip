import React, { useState } from "react";

import styles from "./inputDropdown.module.css";

const InputDropdown = (props: DropdownProps) => {
  const { label, options, onDropdownValueChange } = props;

  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <label> {label} </label>

      <div className={styles.dropdownToggle} onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption : "Select an option"}
        &#9661; &#9651;
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
  onDropdownValueChange: (value: string) => void;
};

export default InputDropdown;
