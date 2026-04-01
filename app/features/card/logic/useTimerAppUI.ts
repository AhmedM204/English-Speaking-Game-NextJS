import { useSelector } from "react-redux";
import { gameStatus, TimeOption } from "./gameSlice";

export default function useTimerAppUI() {
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

  return {
    question,
    buttonText,
    status,
    ableToGetQuestion,
    showStartButton,
    timeOption,
    secondButtonVariant,
  };
}
