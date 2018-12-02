import * as React from "react";
import Svg from "./Svg";

export interface IProps {
  rtl?: boolean;
  speed?: number;
  width?: number;
  height?: number;
  animate?: boolean;
  ariaLabel?: string;
  className: string;
  uniquekey?: string;
  primaryColor?: string;
  primaryOpacity: number;
  secondaryColor?: string;
  secondaryOpacity: number;
  children?: React.ReactNode;
  preserveAspectRatio?: string;
  style: { [key: string]: any };
}

export const defaultProps = {
  animate: true,
  ariaLabel: "Loading interface...",
  height: 130,
  preserveAspectRatio: "xMidYMid meet",
  primaryColor: "#f0f0f0",
  primaryOpacity: 1,
  rtl: false,
  secondaryColor: "#e0e0e0",
  secondaryOpacity: 1,
  speed: 2,
  width: 400,
};

const InitialComponent = (props: IProps) => (
  <rect x="0" y="0" rx="5" ry="5" width={props.width} height={props.height} />
);

export default (props: IProps) => {
  const mergedProps = { ...defaultProps, ...props };
  const children = props.children ? (
    props.children
  ) : (
    <InitialComponent {...mergedProps} />
  );

  return <Svg {...mergedProps}>{children}</Svg>;
};
