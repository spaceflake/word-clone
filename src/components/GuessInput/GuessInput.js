import React from 'react';

export default function GuessInput({ handleSubmitGuess, gameState }) {
  const [prelGuess, setPrelGuess] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitGuess(prelGuess);
    setPrelGuess('');
  };
  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          disabled={gameState !== 'playing'}
          type="text"
          id="guess-input"
          value={prelGuess}
          onChange={(e) => {
            const nextPrelGuess = e.target.value.toUpperCase();
            setPrelGuess(nextPrelGuess);
          }}
          pattern="[a-z,A-Z]{5}"
          title="5 letter word"
          required
        />
      </form>
    </>
  );
}
