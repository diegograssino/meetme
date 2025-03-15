import { ElementType, HTMLAttributes } from "react";

export interface GridProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  cols?: number;
  templateAreas: string;
}

export const Grid = ({
  children,
  as: Tag = "div",
  cols = 12,
  templateAreas,
  ...otherProps
}: GridProps) => {
  return (
    <Tag
      {...otherProps}
      style={{
        gridTemplateAreas: templateAreas,
      }}
      className={`grid grid-cols-${cols} ${otherProps.className || ""}`}
    >
      {children}
    </Tag>
  );
};

interface GridAreaProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  area: string;
}

Grid.Area = function GridArea({
  as: Tag = "div",
  children,
  area,
  ...otherProps
}: GridAreaProps) {
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
