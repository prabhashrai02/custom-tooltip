import Tooltip from "@/Common/ToolTip";

import { TooltipFormStateType } from "../Home/reducer";

import styles from "./mobileScreen.module.css";

const MobileScreen = (props: Props) => {
  const { content } = props;
  return (
    <div>
      <div className={styles.backgroundMobile}>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonsList}>
            <Tooltip config={content}>
              <button className={styles.button}> Button1 </button>
            </Tooltip>
            <Tooltip config={content}>
              <button className={styles.button}> Button2 </button>
            </Tooltip>
          </div>
          <div className={styles.centerButton}>
            <Tooltip config={content}>
              <button className={styles.button}> Button3 </button>
            </Tooltip>
          </div>
          <div className={styles.buttonsList}>
            <Tooltip config={content}>
              <button className={styles.button}> Button4 </button>
            </Tooltip>
            <Tooltip config={content}>
              <button className={styles.button}> Button5 </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

type Props = {
  content: TooltipFormStateType;
};

export default MobileScreen;
