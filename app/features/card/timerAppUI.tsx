"use client";

import { useDispatch } from "react-redux";
import { AppleButton } from "./appleButton";
import { AppleCard } from "./appleCard";
import { AppleText } from "./appleText";
import { AppleTimer } from "./appleTimer ";
import { AppleTimeSelector } from "./appleTimeSelector";
import { continueGame, getQuestion, pause, restTimer, start } from "./logic/gameSlice";
import useTimerAppUI from "./logic/useTimerAppUI";

export default function TimerAppUI() {
  const dispatch = useDispatch();

  const {
    question,
    buttonText,
    status,
    ableToGetQuestion,
    showStartButton,
    timeOption,
    secondButtonVariant,
  } = useTimerAppUI();

  return (
    <div className="min-h-screen bg-[#F5F5F7] flex items-center justify-center p-6 font-sans">
      <AppleCard>
        <AppleTimeSelector selectedOption={timeOption} />

        <AppleText question={question} />

        <AppleTimer />

        <div className="flex flex-col gap-3 mt-2">
          {showStartButton && (
            <AppleButton
              label={buttonText}
              variant="primary"
              onClick={() => {
                if (status === "idle" || status === "finished")
                  dispatch(start());
                else if (status === "working") dispatch(pause());
                else if (status === "paused") dispatch(continueGame());
              }}
            />
          )}
          {ableToGetQuestion && (
            <>
              <AppleButton
                label="Get Another Question"
                variant={secondButtonVariant}
                onClick={() => {
                  dispatch(getQuestion());
                }}
              />

              <AppleButton
                label="Reset Timer"
                variant={secondButtonVariant}
                onClick={() => {
                  dispatch(restTimer());
                }}
              />
            </>


          )}
        </div>
      </AppleCard>
    </div>
  );
}
