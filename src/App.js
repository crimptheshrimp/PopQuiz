import { useState } from 'react';
import HomePage from './features/homePage.jsx';
import QuizPage from './features/quizPage.jsx';
import './App.css';

const App = () => {
  const renderPage = () => {
    return page === 'home' ? <HomePage /> : <QuizPage />;
  };

  const [page, setPage] = useState('home');

  return (
    <div>
      <header>
        <h1>Quizlet</h1>
          <button onClick={() => setPage('home')}>Home</button>
      </header>
      <main>
        {renderPage()}
      </main>
      <footer>
        <button onClick={() => setPage('quiz')} disabled={page==='quiz'}>Start Quiz</button>
      </footer>
    </div>
  );
};

export default App;