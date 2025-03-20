import { ElementType, HTMLAttributes } from "react";
import { cn } from "tailwind-cn";

export interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  as?: ElementType;
}
const Container = ({ children, as: Tag = "div", ...otherProps }: Props) => {
  const { className } = otherProps;
  delete otherProps.className;

  return (
    <Tag
      {...otherProps}
      className={cn("mx-auto max-w-[1280px] px-5", className)}
    >
      {children}
    </Tag>
  );
};

export default Container;
