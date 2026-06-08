import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export const Container = ({
  children,
}: ContainerProps) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1800px",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
};