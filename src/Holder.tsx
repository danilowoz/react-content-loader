import * as React from "react";
import Svg from "./Svg";

export interface IContentLoaderProps {
  animate?: boolean;
  ariaLabel?: string;
  children?: React.ReactNode;
  className?: string;
  height?: number;
  preserveAspectRatio?: "none" | "xMinYMin meet" | "xMidYMin meet" | "xMaxYMin meet" |
  "xMinYMid meet" | "xMidYMid meet" | "xMaxYMid meet" | "xMinYMax meet" | "xMidYMax meet" | "xMaxYMax meet" | "xMinYMin slice" | "xMidYMin slice" | "xMaxYMin slice" | "xMinYMid slice" |
    "xMidYMid slice" | "xMaxYMid slice" | "xMinYMax slice" | "xMidYMax slice" | "xMaxYMax slice";
  primaryColor?: string;
  primaryOpacity?: number;
  rtl?: boolean;
  secondaryColor?: string;
  secondaryOpacity?: number;
  speed?: number;
  style?: React.CSSProperties;
  uniquekey?: string;
  width?: number;
}

export const defaultProps: IContentLoaderProps = {
  animate: true,
  ariaLabel: "Loading interface...",
  height: 130,
  preserveAspectRatio: "none",
  primaryColor: "#f0f0f0",
  primaryOpacity: 1,
  rtl: false,
  secondaryColor: "#e0e0e0",
  secondaryOpacity: 1,
  speed: 2,
  width: 400,
};

const InitialComponent: React.FunctionComponent<IContentLoaderProps> = (props) =>  (
  <rect x="0" y="0" rx="5" ry="5" width={props.width} height={props.height} />
);

export default (props: IContentLoaderProps) => {
  const mergedProps = { ...defaultProps, ...props };
  const children = props.children ? (
    props.children
  ) : (
    <InitialComponent {...mergedProps} />
  );

  return <Svg {...mergedProps}>{children}</Svg>;
};
