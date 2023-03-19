export default function GuessResult({ guesses }) {
  return (
    <div className="guess-results">
      {guesses &&
        guesses.map((guess, index) => (
          <p key={index} className="guess">
            {guess}
          </p>
        ))}
    </div>
  );
}
