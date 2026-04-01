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
  const showStartButton: boolean = useSelector(
    (state: any) => state.game.showStartButton,
  );
  const timeOption: TimeOption = useSelector(
    (state: any) => state.game.timeOption,
  );
  const secondButtonVariant = useSelector(
    (state: any) => state.game.secondButtonVariant,
  );

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
            <AppleButton
              label="Get Another Question"
              variant={secondButtonVariant}
              onClick={() => {
                dispatch(getQuestion());
              }}
            />
          )}
        </div>
      </AppleCard>
    </div>
  );
}
