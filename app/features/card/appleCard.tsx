import { ReactNode } from "react";

interface AppleCardProps {
  children: ReactNode;
}

export const AppleCard = ({ children }: AppleCardProps) => (
  <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/50 w-full max-w-sm mx-auto flex flex-col gap-8">
    {children}
  </div>
);
