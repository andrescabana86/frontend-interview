import { useState } from "react";

interface Props {
  onClick: any;
}

export const HorribleHookButton: React.FC<Props> = props => {
  // this will be rendered more than once
  console.log("render: HorribleHookButton");
  return <button onClick={props.onClick}>Increment</button>;
};
