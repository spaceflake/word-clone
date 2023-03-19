import React from 'react';

export default function GuessInput(props) {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const GUESS = guess.toUpperCase();
    console.log('submitting guess', GUESS);
    setGuess('');
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        pattern="[a-z,A-Z]{5}"
      />
    </form>
  );
}
