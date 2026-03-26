"use client";

import { Provider } from "react-redux";
import TimerAppUI from "./features/card/timerAppUI";
import { store } from "./core/store";

export default function Home() {
  return (
    <Provider store={store}>
      <TimerAppUI />
    </Provider>
  );
}
