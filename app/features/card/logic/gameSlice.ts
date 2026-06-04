import { createSlice } from "@reduxjs/toolkit";
import { ButtonVariant } from "../appleButton";
import Game from "./game";

export type gameStatus = "idle" | "working" | "paused" | "finished";
export type TimeOption = "30" | "45" | "60" | "custom";

export interface IGameState {
  question: string;
  defaultTime: number;
  currentTime: number;
  status: gameStatus;
  buttonText: string;
  timeOption: TimeOption;
  ableToGetQuestion: boolean;
  showStartButton: boolean;

  secondButtonVariant: ButtonVariant;
}

const gameInitState: IGameState = {
  question: "Press start to get a random question",
  defaultTime: 60,
  currentTime: 60,
  status: "idle",
  buttonText: "Start",
  timeOption: "60",
  ableToGetQuestion: false,
  showStartButton: true,
  secondButtonVariant: "secondary",
};

export const gameSlice = createSlice({
  name: "game",
  initialState: gameInitState,
  reducers: {
    getQuestion: Game.getQuestion,
    start: Game.start,
    pause: Game.pause,
    continueGame: Game.continueGame,
    finish: Game.finish,
    tick: Game.tick,
    setTime: Game.setTime,
    restTimer: Game.restTimer,
  },
});

export const {
  getQuestion,
  start,
  pause,
  continueGame,
  finish,
  tick,
  setTime,
  restTimer,
} = gameSlice.actions;
export default gameSlice.reducer;
