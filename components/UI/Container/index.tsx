import { ElementType, HTMLAttributes } from "react";

export interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}
const Container = ({ children, as: Tag = "div", ...otherProps }: Props) => {
  return (
    <Tag
      {...otherProps}
      className={`max-w-[1280px] mx-auto px-5 ${otherProps.className || ""}`}
    >
      {children}
    </Tag>
  );
};

export default Container;
