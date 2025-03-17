import { ElementType, HTMLAttributes } from "react";

interface GridAreaProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
  area: string;
}

 const GridArea = ({
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
export default GridArea
