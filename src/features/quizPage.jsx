import React, { useState } from 'react';
import quiz from './quiz';

// hosts the logic for the quiz page, properly displaying them

const QuizPage = () => {
    const [userAnswer, setUserAnswer] = useState('');
    const [remainingQ, setRemainingQ] = useState(quiz.questions);
    const [remainingAns, setRemainingAns] = useState(quiz.answers);
    const [score, setScore] = useState(0);
    const [questionNum, setQuestionNum] = useState(0);
    const [currentQ, setCurrentQ] = useState('This is the example question. Is this quiz named Chris\'s quiz?');
    const [currentAns, setCurrentAns] = useState('nope with a little bit of sauce');
    const [options, setOptions] = useState([]); // for multiple‑choice
    const [quizComplete, setQuizComplete] = useState(false);

    const showNextQuestion = () => {
        // score check uses the arrayAns answer (first element of array)
        const arrayAns = Array.isArray(currentAns) ? currentAns[0] : currentAns;
        //first check the answer to the current question, and update score if correct
        if (userAnswer.trim().toLowerCase() === arrayAns.toLowerCase()) {
            setScore(prevScore => prevScore + 1);
        } else {
            // if the answer is wrong, alert the user with the correct answer before moving on
            alert(`Wrong! The correct answer was: ${arrayAns}`);
        }
        // if there are no more questions, mark completion
        if (remainingQ.length === 0) {
            setQuizComplete(true);
            return;
        }

        const q = Math.floor(Math.random() * remainingQ.length);

        setQuestionNum(prevNum => prevNum + 1);

        // set next question and answer
        const nextQ = remainingQ[q];
        const nextA = remainingAns[q];
        setCurrentQ(nextQ);

        if (Array.isArray(nextA)) {
            // store the correct answer (first in original array)
            const correctAnswer = nextA[0];
            
            // shuffle the choices for display
            const shuffled = [...nextA].sort(() => Math.random() - 0.5);
            setOptions(shuffled);
            setCurrentAns(correctAnswer); // treat first element of ORIGINAL array as correct
        } else {
            setOptions([]);
            setCurrentAns(nextA);
        }

        setRemainingQ(prev => prev.filter((_, i) => i !== q));
        setRemainingAns(prev => prev.filter((_, i) => i !== q));
        setUserAnswer('');
    }

    // Displays everything, including the current question, the input box for the answer, the submit button, the score,
    // and, when appropriate, the multiple‑choice options or a completion message.
    return (
        <div>
            {quizComplete ? (
                <h1>
                    Quiz complete! Your score is {score} out of {questionNum}.
                </h1>
            ) : (
                <> 
                    <h1>{questionNum}. <br />{currentQ}</h1>
                    {options.length > 0 && (
                        <div>
                            <p>Multiple choice question! The options are:</p>
                            <ol>
                                {options.map((opt, idx) => (
                                    <li key={idx}>{opt}</li>
                                ))}
                            </ol>
                        </div>
                    )}
                    <input
                        id="answerInput"
                        type="text"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                    />
                    <button
                        id="nextButton"
                        onClick={showNextQuestion}
                    >
                        Submit
                    </button>
                    <p>Click "Submit" to submit your answer.</p>
                    {questionNum > 0 && <p>{score} out of {questionNum - 1} correct.</p>}
                </>
            )}
        </div>
    );
}

export default QuizPage;