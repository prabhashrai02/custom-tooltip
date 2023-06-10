import { ACTION_TYPE, TOOLTIP_DEFAULT_VALUE } from "./constants";

const initialState = {
    tooltipFormData: JSON.parse(JSON.stringify(TOOLTIP_DEFAULT_VALUE))
};

const reducer = (prevState: State, action: Action): State => {

  switch (action.type) {
    case ACTION_TYPE.SET_TOOLTIP_FORM_DATA: {
        return {
            ...prevState,
            tooltipFormData: action.payload
        };
    }
    case ACTION_TYPE.SET_DEFAULT_VALUE: {
        return {
            ...prevState,
            tooltipFormData: JSON.parse(JSON.stringify(TOOLTIP_DEFAULT_VALUE))
        }
    } 
    default:
      return prevState;
  }
};

type Action =
  | { type: "setTooltipFormData"; payload: TooltipFormStateType }
  | { type: "setDefaultValue" }

type State = {
    tooltipFormData: TooltipFormStateType;
};

export type TooltipFormStateType = {
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
}

export { initialState, reducer };
