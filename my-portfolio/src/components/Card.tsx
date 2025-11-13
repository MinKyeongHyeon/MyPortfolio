"use client";
import { ReactNode, useState } from "react";
import MoreButton from "./MoreButton";

interface CardProps {
  title: string;
  children: ReactNode;
  backgroundColor?: string;
}

export default function Card({
  title,
  children,
  backgroundColor = "#DB4F28",
}: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className="w-[335px] py-[17px]  px-[11px] rounded-2xl"
      style={{ backgroundColor }}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-mono text-2xl text-white">{title}</h3>
        <MoreButton onClick={handleToggle} isExpanded={isExpanded} />
      </div>
      {isExpanded && children}
    </div>
  );
}
