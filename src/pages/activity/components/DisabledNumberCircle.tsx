import * as React from "react";

import NumberCircle, { INumberCircleProps } from "./NumberCircle";

const DisabledNumberCircle: React.FunctionComponent<INumberCircleProps> = (
  props
) => {
  return <NumberCircle {...props} className="bg-opacity-0" />;
};

export default DisabledNumberCircle;
