import React from "react";
interface ProjectTagProps {
  name: string;
  onClick: any;
  isSelected: boolean;
  color: string;
}
const ProjectTag = ({ name, onClick, isSelected, color }: ProjectTagProps) => {
  const buttonStyle = isSelected
    ? `text-white border-${color}-500`
    : "text-[#ADB7BE] border-slate-600 hover:border-white";
  return (
    <button
      className={`${buttonStyle} rounded-full border-2 px-5 cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
