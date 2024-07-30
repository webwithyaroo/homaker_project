import { twMerge } from "tailwind-merge";
const MaxWidth = ({ children, className }) => {
  return (
    <div className={twMerge("mx-auto px-[2rem]  max-w-[79rem]", className)}>
      {children}
    </div>
  );
};

export default MaxWidth;
