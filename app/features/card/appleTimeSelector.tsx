interface AppleTimeSelectorProps {
  selectedOption: "30" | "45" | "60" | "custom";
  onSelect: (option: "30" | "45" | "60" | "custom") => void;
}

export const AppleTimeSelector = ({
  selectedOption,
  onSelect,
}: AppleTimeSelectorProps) => {
  const options = [
    { id: "30", label: "30s" },
    { id: "45", label: "45s" },
    { id: "60", label: "60s" },
    { id: "custom", label: "Custom" },
  ] as const;

  return (
    <div className="w-full bg-gray-100/80 p-1.5 rounded-[1.25rem] flex items-center justify-between gap-1">
      {options.map((opt) => {
        const isSelected = selectedOption === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className={`flex-1 py-2.5 text-[13px] font-semibold rounded-xl transition-all duration-200 ease-out ${
              isSelected
                ? "bg-white text-black shadow-[0_2px_8px_rgb(0,0,0,0.08)]"
                : "text-gray-500 hover:text-gray-700 active:scale-95"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};
