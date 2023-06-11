export const getArrowTopPosition = (tooltipPosition: string) => {
  if (tooltipPosition === "bottom") return "5px";

  if (tooltipPosition === "left") return "-2px";

  if (tooltipPosition === "right") return "-2px";

  return "";
};

export const getArrowBottomPosition = (tooltipPosition: string) => {
  if (tooltipPosition === "top") return "10px";

  return "20px";
};

export const getArrowLeftPosition = (tooltipPosition: string) => {
  if (tooltipPosition === "right") return "44px";

  return "";
};

export const getArrowRightPosition = (tooltipPosition: string) => {
  if (tooltipPosition === "left") return "44px";

  return "";
};

export const getTooltipBoxTopPosition = (tooltipPosition: string) => {
  if (tooltipPosition === "bottom") return "125%";

  if (tooltipPosition === "left") return "50%";

  if (tooltipPosition === "right") return "50%";

  return "";
};

export const getTooltipBoxBottomPosition = (tooltipPosition: string) => {
  if (tooltipPosition === "top") return "125%";

  return "";
};

export const getTooltipBoxLeftPosition = (tooltipPosition: string) => {
  if (tooltipPosition === "right") return "115%";

  return "";
};

export const getTooltipBoxRightPosition = (tooltipPosition: string) => {
  if (tooltipPosition === "left") return "115%";

  return "";
};
