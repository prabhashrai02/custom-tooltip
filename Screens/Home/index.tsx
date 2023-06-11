"use client";

import MobileScreen from "../MobileScreen";
import TooltipForm from "../TooltipForm";
import useTooltip from "./useTooltip";

import styles from "./home.module.css";

const Home = () => {
  const { tooltipFormData, onEventChange, onValueChange } = useTooltip();

  return (
    <div className={styles.homepage}>
      <div className={styles.formScreenContainer}>
        <TooltipForm
          content={tooltipFormData}
          onEventChange={onEventChange}
          onValueChange={onValueChange}
        />
        <MobileScreen content={tooltipFormData} onButtonClick={onValueChange} />
      </div>
    </div>
  );
};

export default Home;
