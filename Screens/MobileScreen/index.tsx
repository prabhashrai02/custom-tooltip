import Tooltip from "@/Common/ToolTip";

import { TooltipFormStateType } from "../Home/reducer";

import styles from "./mobileScreen.module.css";

const MobileScreen = (props: Props) => {
  const { content, onButtonClick } = props;

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.textContent?.trim().toLowerCase();
    value && onButtonClick(value, "targetElement");
  }

  return (
    <div>
      <div className={styles.backgroundMobile}>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonsList}>
            <Tooltip config={content}>
              <button className={styles.button} onClick={(e) => handleButtonClick(e)}> Button1 </button>
            </Tooltip>
            <Tooltip config={content}>
              <button className={styles.button} onClick={(e) => handleButtonClick(e)}> Button2 </button>
            </Tooltip>
          </div>
          <div className={styles.centerButton}>
            <Tooltip config={content}>
              <button className={styles.button} onClick={(e) => handleButtonClick(e)}> Button3 </button>
            </Tooltip>
          </div>
          <div className={styles.buttonsList}>
            <Tooltip config={content}>
              <button className={styles.button} onClick={(e) => handleButtonClick(e)}> Button4 </button>
            </Tooltip>
            <Tooltip config={content}>
              <button className={styles.button} onClick={(e) => handleButtonClick(e)}> Button5 </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

type Props = {
  onButtonClick: (value: string, field: string) => void;
  content: TooltipFormStateType;
};

export default MobileScreen;
