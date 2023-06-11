import InputBox from "@/Common/InputBox";
import InputDropdown from "@/Common/InputDropdown";

import { TooltipFormStateType } from "../Home/reducer";
import { BUTTONS_LIST, TOOLTIP_POSITION } from "./constants";
import { isDigitKeyPressed } from "./tooltipFormHelper";

import styles from "./tooltipForm.module.css";

const TooltipForm = (props: Props) => {
  const { content, onEventChange, onValueChange } = props;

  const handleNumberValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    if (Number(e.target.value) < 0) return;

    const lastEntered = e.target.value.slice(-1);

    console.log(lastEntered);
    isDigitKeyPressed(lastEntered) && onEventChange(e, field);
  };

  return (
    <div className={styles.tooltipForm}>
      <div className={styles.inputLineContainer}>
        <InputDropdown
          label={"Target Element"}
          options={BUTTONS_LIST}
          onDropdownValueChange={(value) =>
            onValueChange(value, "targetElement")
          }
          selectedValue={content.targetElement}
        />
        <InputDropdown
          label={"Tooltip Position"}
          options={TOOLTIP_POSITION}
          onDropdownValueChange={(value) =>
            onValueChange(value, "tooltipPosition")
          }
          selectedValue={content.tooltipPosition}
        />
      </div>
      <InputBox
        label={"ToolTip Text"}
        onChange={(e) => onEventChange(e, "tooltipText")}
        type="text"
        value={content.tooltipText}
      />
      <div className={styles.inputLineContainer}>
        <InputBox
          maxLength={3}
          label={"Text Size"}
          onChange={(e) => handleNumberValueChange(e, "textSize")}
          type="number"
          value={content.textSize}
        />
        <InputBox
          maxLength={3}
          label={"Padding"}
          onChange={(e) => handleNumberValueChange(e, "padding")}
          type="number"
          value={content.padding}
        />
      </div>
      <InputBox
        label={"Text Color"}
        onChange={(e) => onEventChange(e, "textColor")}
        type="text"
        value={content.textColor}
      />
      <InputBox
        label={"Background Color"}
        onChange={(e) => onEventChange(e, "backgroundColor")}
        type="text"
        value={content.backgroundColor}
      />
      <div className={styles.inputLineContainer}>
        <InputBox
          maxLength={3}
          label={"Corner Radius"}
          onChange={(e) => handleNumberValueChange(e, "cornerRadius")}
          type="number"
          value={content.cornerRadius}
        />
        <InputBox
          maxLength={3}
          label={"ToolTip Width"}
          onChange={(e) => handleNumberValueChange(e, "tooltipWidth")}
          type="number"
          value={content.tooltipWidth}
        />
      </div>
      <div className={styles.inputLineContainer}>
        <InputBox
          maxLength={3}
          label={"Arrow Width"}
          onChange={(e) => handleNumberValueChange(e, "arrowWidth")}
          type="number"
          value={content.arrowWidth}
        />
        <InputBox
          maxLength={3}
          label={"Arrow Height"}
          onChange={(e) => handleNumberValueChange(e, "arrowHeight")}
          type="number"
          value={content.arrowHeight}
        />
      </div>
    </div>
  );
};

type Props = {
  content: TooltipFormStateType;
  onEventChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => void;
  onValueChange: (value: string, field: string) => void;
};

export default TooltipForm;
