import { useState } from "react";
import { setTime, TimeOption } from "./logic/gameSlice";
import { useDispatch } from "react-redux";
import { AppleCustomTimeDialog } from "./appleCustomTimeDialog";

interface AppleTimeSelectorProps {
  selectedOption: "30" | "45" | "60" | "custom";
}

const options = [
  { id: "30", label: "30s" },
  { id: "45", label: "45s" },
  { id: "60", label: "60s" },
  { id: "custom", label: "Custom" },
] as const;

export const AppleTimeSelector = ({
  selectedOption,
}: AppleTimeSelectorProps) => {
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [customTimeInput, setCustomTimeInput] = useState("120");

  const handleCustomTimeSave = () => {
    const timeInSeconds = parseInt(customTimeInput, 10);
    if (!isNaN(timeInSeconds) && timeInSeconds > 0) {
      dispatch(setTime({ option: "custom", time: timeInSeconds }));
    }
    setIsDialogOpen(false);
  };
  const handleTimeSelect = (option: TimeOption) => {
    if (option === "custom") {
      setIsDialogOpen(true);
    } else {
      // Convert string "30", "45", "60" to numbers and dispatch
      dispatch(setTime({ option, time: parseInt(option, 10) }));
    }
  };

  return (
    <>
      <div className="w-full bg-gray-100/80 p-1.5 rounded-[1.25rem] flex items-center justify-between gap-1">
        {options.map((opt) => {
          const isSelected = selectedOption === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => handleTimeSelect(opt.id)}
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

      <AppleCustomTimeDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        value={customTimeInput}
        onChange={setCustomTimeInput}
        onSave={handleCustomTimeSave}
      />
    </>
  );
};
