import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import GameView from "./Components/GameView";
import Home from "./Components/Home";
import { GameType } from "./Games/GameFactory";
import { BASE_URL, BASIC_GAME, EVIL_GAME } from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="app-header">
          Just Another Wordle Clone
          <nav className="app-navigation">
            <Link to={BASIC_GAME}>WORDLE</Link>
            <Link to={EVIL_GAME}>EVIL WORDLE</Link>
          </nav>
        </header>
          <Routes>
                <Route path={BASE_URL} element={<Home />} />
                <Route path={BASIC_GAME} element={<GameView gameType={GameType.VANILLA}/>} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
