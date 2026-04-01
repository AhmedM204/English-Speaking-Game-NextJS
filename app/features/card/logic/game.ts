import { PayloadAction } from "@reduxjs/toolkit";
import { IGameState, TimeOption } from "./gameSlice";
import questions from "@/app/core/questions.json";
export default class Game {
  public static getQuestion(state: IGameState) {
    const randomIndex = Math.floor(Math.random() * questions.length);

    state.question = questions[randomIndex].question;
    state.status = "working";
    state.currentTime = state.defaultTime;
    state.buttonText = "Pause";
    state.showStartButton = true;
    state.secondButtonVariant = "secondary";
  }
  public static start(state: IGameState) {
    const randomIndex = Math.floor(Math.random() * questions.length);

    state.question = questions[randomIndex].question;
    state.status = "working";
    state.currentTime = state.defaultTime;
    state.buttonText = "Pause";
    state.ableToGetQuestion = true;
  }

  public static pause(state: IGameState) {
    state.status = "paused";
    state.buttonText = "Continue";
  }

  public static continueGame(state: IGameState) {
    state.buttonText = "Pause";
    state.status = "working";
  }
  public static finish(state: IGameState) {
    state.status = "finished";
    state.buttonText = "Get another question";
  }

  public static tick(state: IGameState) {
    if (state.status === "working" && state.currentTime > 0) {
      state.currentTime -= 1;
    }

    if (state.currentTime === 0) {
      state.status = "finished";
      state.buttonText = "Get a new question!";
      state.showStartButton = false;
      state.secondButtonVariant = "primary";
    }
  }

  public static formatTime(seconds: number) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const paddedMins = String(mins).padStart(2, "0");
    const paddedSecs = String(secs).padStart(2, "0");

    return `${paddedMins}:${paddedSecs}`;
  }

  // NEW METHOD: Handles changing the time from the UI
  public static setTime(
    state: IGameState,
    action: PayloadAction<{ option: TimeOption; time: number }>,
  ) {
    state.timeOption = action.payload.option;
    state.defaultTime = action.payload.time;

    if (state.status === "idle" || state.status === "finished") {
      state.currentTime = action.payload.time;
    }
  }
}
