"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gameStatus, tick } from "./gameSlice";

export default function useTimer() {
  const dispatch = useDispatch();
  const status: gameStatus = useSelector((state: any) => state.game.status);
  const currentTime: number = useSelector(
    (state: any) => state.game.currentTime,
  );
  useEffect(() => {
    if (status !== "working") return;

    const interval = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => clearInterval(interval);
  }, [status]);

  return { currentTime, status };
}
