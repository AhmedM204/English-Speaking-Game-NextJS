"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppleButton } from "./appleButton";
import { AppleCard } from "./appleCard";
import { AppleText } from "./appleText";
import { AppleTimeSelector } from "./appleTimeSelector";
import { AppleCustomTimeDialog } from "./appleCustomTimeDialog";
import {
  continueGame,
  gameStatus,
  start,
  pause,
  setTime,
  TimeOption,
  getQuestion,
} from "./logic/gameSlice";
import { AppleTimer } from "./appleTimer ";

export default function TimerAppUI() {
  const dispatch = useDispatch();

  // Redux State
  const question = useSelector((state: any) => state.game.question);
  const buttonText = useSelector((state: any) => state.game.buttonText);
  const status: gameStatus = useSelector((state: any) => state.game.status);
  const ableToGetQuestion: boolean = useSelector(
    (state: any) => state.game.ableToGetQuestion,
  );
  const timeOption: TimeOption = useSelector(
    (state: any) => state.game.timeOption,
  );

  // Local UI State for Custom Dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [customTimeInput, setCustomTimeInput] = useState("120");

  const handleTimeSelect = (option: TimeOption) => {
    if (option === "custom") {
      setIsDialogOpen(true);
    } else {
      // Convert string "30", "45", "60" to numbers and dispatch
      dispatch(setTime({ option, time: parseInt(option, 10) }));
    }
  };

  const handleCustomTimeSave = () => {
    const timeInSeconds = parseInt(customTimeInput, 10);
    if (!isNaN(timeInSeconds) && timeInSeconds > 0) {
      dispatch(setTime({ option: "custom", time: timeInSeconds }));
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center p-6 font-sans">
      <AppleCard>
        {/* Time Selector */}
        <AppleTimeSelector
          selectedOption={timeOption}
          onSelect={handleTimeSelect}
        />

        {/* Text Section */}
        <AppleText question={question} />

        {/* Timer Section */}
        <AppleTimer />

        {/* Button Section */}
        <div className="flex flex-col gap-3 mt-2">
          <AppleButton
            label={buttonText}
            variant="primary"
            onClick={() => {
              if (status === "idle" || status === "finished") dispatch(start());
              else if (status === "working") dispatch(pause());
              else if (status === "paused") dispatch(continueGame());
            }}
          />
          {ableToGetQuestion && (
            <AppleButton
              label="Get Another Question"
              variant="secondary"
              onClick={() => {
                dispatch(getQuestion());
              }}
            />
          )}
        </div>
      </AppleCard>

      {/* Custom Time Dialog */}
      <AppleCustomTimeDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        value={customTimeInput}
        onChange={setCustomTimeInput}
        onSave={handleCustomTimeSave}
      />
    </div>
  );
}
