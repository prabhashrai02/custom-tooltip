
import { useReducer } from "react";

import { TooltipFormStateType, initialState, reducer } from "./reducer";
import { ACTION_TYPE } from "./constants";

const useTooltip = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { tooltipFormData } = state;

  const onEventChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const { value } = e.target;

    const tempTooltipForm = { ...tooltipFormData };
    tempTooltipForm[field] = value;

    setTooltipFormData(tempTooltipForm);
  }

  const onValueChange = (value: string, field: string) => {
    const tempTooltipForm = { ...tooltipFormData };
    tempTooltipForm[field] = value;

    setTooltipFormData(tempTooltipForm);
  }

  const setTooltipFormData = (value: TooltipFormStateType) => {
    dispatch({ type: ACTION_TYPE.SET_TOOLTIP_FORM_DATA, payload: value });
  };

  return {
    tooltipFormData,
    onEventChange,
    onValueChange
  }
};

export default useTooltip;