"use client";

import { ElementType, HTMLAttributes } from "react";

enum BreakpointNames {
  SM = "sm",
  MD = "md",
  LG = "lg",
  XL = "xl",
}

interface BreakpointConfig {
  cols: number;
  gap?: number;
}

export interface GridProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  templateAreas: string;
  config: BreakpointConfig;
  responsive?: Record<BreakpointNames, BreakpointConfig>;
}

const GridTemplate = ({
  children,
  as: Tag = "div",
  templateAreas,
  config,
  responsive = {
    sm: config,
    md: config,
    lg: config,
    xl: config,
  },
  ...otherProps
}: GridProps) => {
  const { sm, md, lg, xl } = responsive;
  // const headTag = document.getElementsByTagName("head")[0];
  // const styleTag = `
  // <style>
  // @media (width >= 40rem) {
  //   }
  // </style>`;
  // headTag.innerHTML += styleTag;

  return (
    <Tag
      {...otherProps}
      style={{
        gridTemplateAreas: templateAreas,
        ...otherProps.style,
      }}
      className={`grid grid-cols-${config.cols} gap-${
        config.gap
      } sm:grid-cols-${sm.cols} sm:gap-${sm.gap} md:grid-cols-${
        md.cols
      } md:gap-${md.gap} lg:grid-cols-${lg.cols} lg:gap-${lg.gap}xl:grid-cols-${
        xl.cols
      } xl:gap-${xl.gap} ${otherProps.className || ""}`}
    >
      {children}
    </Tag>
  );
};

export default GridTemplate;

interface GridAreaProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  area: string;
}

export const GridArea = ({
  as: Tag = "div",
  children,
  area,
  ...otherProps
}: GridAreaProps) => {
  return (
    <Tag
      style={{
        gridArea: area,
      }}
      {...otherProps}
    >
      {children}
    </Tag>
  );
};
