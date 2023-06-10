import InputBox from "@/Common/InputBox";
import InputDropdown from "@/Common/InputDropdown";

import styles from "./tooltipForm.module.css";
import { TooltipFormStateType } from "../Home/reducer";
import { BUTTONS_LIST } from "./constants";

const TooltipForm = (props: Props) => {
  const { content, onEventChange, onValueChange } = props;
  return (
    <div className={styles.tooltipForm}>
      <InputDropdown
        label={"Target Element"}
        options={BUTTONS_LIST}
        onDropdownValueChange={(value) => onValueChange(value, 'targetElement')}
        selectedValue={content.targetElement}
      />
      <InputBox
        label={"ToolTip Text"}
        onChange={(e) => onEventChange(e, 'tooltipText')}
        type="text"
        value={content.tooltipText}
      />
      <div className={styles.inputLineContainer}>
        <InputBox
          label={"Text Size"}
          onChange={(e) => onEventChange(e, 'textSize')}
          type="text"
          value={content.textSize}
        />
        <InputBox
          label={"Padding"}
          onChange={(e) => onEventChange(e, 'padding')}
          type="text"
          value={content.padding}
        />
      </div>
      <InputBox
        label={"Text Color"}
        onChange={(e) => onEventChange(e, 'textColor')}
        type="text"
        value={content.textColor}
      />
      <InputBox
        label={"Background Color"}
        onChange={(e) => onEventChange(e, 'backgroundColor')}
        type="text"
        value={content.backgroundColor}
      />
      <div className={styles.inputLineContainer}>
        <InputBox
          label={"Corner Radius"}
          onChange={(e) => onEventChange(e, 'cornerRadius')}
          type="text"
          value={content.cornerRadius}
        />
        <InputBox
          label={"ToolTip Width"}
          onChange={(e) => onEventChange(e, 'tooltipWidth')}
          type="text"
          value={content.tooltipWidth}
        />
      </div>
      <div className={styles.inputLineContainer}>
        <InputBox
          label={"Arrow Width"}
          onChange={(e) => onEventChange(e, 'arrowWidth')}
          type="text"
          value={content.arrowWidth}
        />
        <InputBox
          label={"Arrow Height"}
          onChange={(e) => onEventChange(e, 'arrowHeight')}
          type="text"
          value={content.arrowHeight}
        />
      </div>
    </div>
  );
};

type Props = {
  content: TooltipFormStateType;
  onEventChange: (e: React.ChangeEvent<HTMLInputElement>, field: string) => void;
  onValueChange: (value: string, field: string) => void;
};

export default TooltipForm;
