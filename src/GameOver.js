import Button from "./Button";

function GameOver({ hasWon, onReset }) {
  return (
    <div>
      {hasWon && <h2>BANNNNNNG!!!!! You guessed my number!</h2>}
      {!hasWon && <h2>Booo! You LOSE! Want some more of me again?!</h2>}
      <Button onClick={onReset}>Play Again!</Button>
    </div>
  );
}

export default GameOver;
