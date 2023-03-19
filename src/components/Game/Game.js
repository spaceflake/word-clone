import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { sample } from '../../utils';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState('playing');
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

  console.log({ answer });

  const handleSubmitGuess = (prelGuess) => {
    const nextGuesses = [...guesses, prelGuess];
    setGuesses(nextGuesses);

    if (prelGuess === answer) {
      setGameState('won');
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameState('lost');
    }
  };

  const handlePlayAgain = () => {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameState('playing');
  };

  return (
    <>
      <GuessResult guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameState={gameState} />
      {gameState === 'won' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guesses.length}</strong>.
          </p>
          <button onClick={handlePlayAgain}>Play Again ?</button>
        </div>
      )}
      {gameState === 'lost' && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button onClick={handlePlayAgain}>Play Again ?</button>
        </div>
      )}
    </>
  );
}

export default Game;
