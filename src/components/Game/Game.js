import React from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';
import Keyboard from '../Keyboard/Keyboard';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState('playing');
  const [answer, setAnswer] = React.useState(() => sample(WORDS));

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

  const validGuesses = guesses.map((guess) => checkGuess(guess, answer));

  return (
    <>
      <GuessResult guesses={validGuesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameState={gameState} />
      <Keyboard validGuesses={validGuesses} />
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
