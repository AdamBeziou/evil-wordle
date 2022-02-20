import "./App.css";
import words from "./Words/WordList.js";
import Guess from "./Components/Guess";
import AppRouter from "./AppRouter";

const MAX_GUESSES = 5;
const WORD_LENGTH = 5;

/*
What does the game need to have?
- A correct word
- A current guess
- A record of past guesses

What operations are there in the game?
- Making a guess
  - Need to figure out what letters are in place/present, but out of place
  - Need to record the guess in a record of past guesses

What is configurable?
- Length of the correct word
- Number of possible guesses
- Size/words in a word pool
*/

function App() {
  return (
    <div className="App">
      <nav className="app-header">
        <a>Wordle</a>
        <a>Evil Wordle</a>
      </nav>
      <AppRouter />
    </div>
  );
}

export default App;
