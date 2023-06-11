import { ACTION_TYPE, TOOLTIP_DEFAULT_VALUE } from "./constants";


const prevData = localStorage.getItem('customTooltip');

const initialState = {
  tooltipFormData: prevData ? JSON.parse(prevData) : JSON.parse(JSON.stringify(TOOLTIP_DEFAULT_VALUE)),
};

const reducer = (prevState: State, action: Action): State => {
  switch (action.type) {
    case ACTION_TYPE.SET_TOOLTIP_FORM_DATA: {
      localStorage.setItem('customTooltip', JSON.stringify(action.payload));
      return {
        ...prevState,
        tooltipFormData: action.payload,
      };
    }
    case ACTION_TYPE.SET_DEFAULT_VALUE: {
      return {
        ...prevState,
        tooltipFormData: JSON.parse(JSON.stringify(TOOLTIP_DEFAULT_VALUE)),
      };
    }
    default:
      return prevState;
  }
};

type Action =
  | { type: "setTooltipFormData"; payload: TooltipFormStateType }
  | { type: "setDefaultValue" };

type State = {
  tooltipFormData: TooltipFormStateType;
};

export type TooltipFormStateType = {
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

  [key: string]: string;
};

export { initialState, reducer };
