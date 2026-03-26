"use client";

import Game from "./logic/game";
import { gameStatus } from "./logic/gameSlice";
import useTimer from "./logic/useTimer";

export const AppleTimer = () => {
  // Strictly typed record for semantic colors
  const { currentTime, status } = useTimer();
  const statusColors: Record<gameStatus, string> = {
    paused: "text-black",
    working: "text-orange-500",
    finished: "text-red-500",
    idle: "text-gray-400",
  };

  return (
    <div className="flex justify-center items-center py-4">
      <div className="bg-gray-50/80 backdrop-blur-md border border-gray-100 px-8 py-4 rounded-[1.5rem] shadow-inner">
        <span
          className={`text-5xl font-medium tracking-tighter tabular-nums antialiased ${statusColors[status]}`}
        >
          {Game.formatTime(currentTime)}{" "}
        </span>
      </div>
    </div>
  );
};
