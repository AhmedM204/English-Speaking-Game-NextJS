import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
}

const gameInitState: IGameState = {
  question: "Press start to get a random question",
  defaultTime: 60,
  currentTime: 60,
  status: "idle",
  buttonText: "Start",
  timeOption: "60",
};

export const gameSlice = createSlice({
  name: "game",
  initialState: gameInitState,
  reducers: {
    getQuestion: Game.getQuestion,
    pause: Game.pause,
    continueGame: Game.continueGame,
    finish: Game.finish,
    tick: Game.tick,
    setTime: Game.setTime,
  },
});

export const { getQuestion, pause, continueGame, finish, tick, setTime } =
  gameSlice.actions;
export default gameSlice.reducer;
