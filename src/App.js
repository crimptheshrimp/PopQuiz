import React, { useState } from 'react';
import HomePage from './features/homePage';
import QuizPage from './features/quizPage';
import './App.css';

const App = () => {
  const [page, setPage] = useState('home');
  
  const renderPage = () => {
    return page === 'home' ? <HomePage /> : <QuizPage />;
  };

  return (
    <div>
      <header>
        <h1>Quizlet</h1>
        <h2 id='homeButton' className="button">
          <button onClick={() => setPage('home')}>Home</button>
        </h2>
      </header>
      <main>
        {renderPage()}
      </main>
      <footer>
        <h2 id='quizButton' className="button">
          <button onClick={() => setPage('quiz')}>Start Quiz</button>
        </h2>
      </footer>
    </div>
  );
};

export default App;