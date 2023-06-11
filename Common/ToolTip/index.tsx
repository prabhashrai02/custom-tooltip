import React, { ReactElement } from "react";

import {
  getArrowLeftPosition,
  getArrowRightPosition,
  getArrowTopPosition,
  getArrowBottomPosition,
  getTooltipBoxBottomPosition,
  getTooltipBoxLeftPosition,
  getTooltipBoxRightPosition,
  getTooltipBoxTopPosition,
} from "./tooltipHelper";

import styles from "./tooltip.module.css";

const Tooltip = ({ config, children }: TooltipProps) => {
  const {
    tooltipPosition,
    targetElement,
    tooltipText,
    textSize,
    padding,
    textColor,
    backgroundColor,
    cornerRadius,
    tooltipWidth,
    arrowWidth,
    arrowHeight,
  } = config;

  const tooltipStyle: React.CSSProperties = {
    position: "absolute",
    top: getTooltipBoxTopPosition(tooltipPosition),
    bottom: getTooltipBoxBottomPosition(tooltipPosition),
    left: getTooltipBoxLeftPosition(tooltipPosition),
    right: getTooltipBoxRightPosition(tooltipPosition),
    transform:
      tooltipPosition === "right" || tooltipPosition === "left"
        ? "translateY(-50%)"
        : "translateX(-50%)",
    zIndex: 1,
    width: `${tooltipWidth}px`,
    padding: `${padding}px`,
    backgroundColor: backgroundColor,
    color: textColor,
    borderRadius: `${cornerRadius}px`,
    fontSize: `${textSize}px`,
    textAlign: "center",
  };

  const arrowStyle: React.CSSProperties = {
    position: "absolute",
    top: getArrowTopPosition(tooltipPosition),
    bottom: getArrowBottomPosition(tooltipPosition),
    left: getArrowLeftPosition(tooltipPosition),
    right: getArrowRightPosition(tooltipPosition),
    width: `${arrowWidth}px`,
    height: `${arrowHeight}px`,
    borderTop: `${arrowHeight}px solid ${backgroundColor}`,
    borderRight: `${arrowWidth}px solid transparent`,
    borderBottom: `${arrowHeight}px solid transparent`,
    borderLeft: `${arrowWidth}px solid transparent`,
    transform:
      tooltipPosition === "top"
        ? ""
        : tooltipPosition === "left"
        ? "rotate(-90deg)"
        : tooltipPosition === "right"
        ? "rotate(90deg)"
        : "rotate(180deg)",
  };

  const tooltipContainerStyle: React.CSSProperties = {
    position: "relative",
  };

  const selectedButton = children.props.children.trim().toLowerCase();

  return (
    <div style={tooltipContainerStyle}>
      {children}
      {selectedButton === targetElement && (
        <div className={styles.tooltipContainer}>
          <div style={arrowStyle} />
          <div style={tooltipStyle}>{tooltipText}</div>
        </div>
      )}
    </div>
  );
};

type TooltipConfig = {
  tooltipPosition: "top" | "bottom" | "left" | "right";
  targetElement: string;
  tooltipText: string;
  textSize: string;
  padding: string;
  textColor: string;
  backgroundColor: string;
  cornerRadius: string;
  tooltipWidth: string;
  arrowWidth: string;
  arrowHeight: string;
};

type TooltipProps = {
  config: TooltipConfig;
  children: ReactElement;
};

export default Tooltip;
