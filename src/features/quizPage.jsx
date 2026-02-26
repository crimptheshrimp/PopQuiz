import React, { useState, useEffect } from 'react';
import quiz from './quiz';

// hosts the logic for the quiz page, properly displaying them

const QuizPage = () => {
    const [userAnswer, setUserAnswer] = useState('');
    let remaining = [...quiz.questions];
    let questionNum = 0;
    let score = 0;
    const scoreKeeper = (userAnswer, questionNum) => {
        if (userAnswer.toLowerCase() === quiz.answers[questionNum]) {
            score++;
        }
    };

    function showQuestion() {        
        // pick a random question and remove it from the remaining questions
        while (remaining.length > 0) {
            const q = quiz.questionPicker(remaining);
            questionNum++;
            return (
                <div>
                    <h1>{remaining[q]}</h1>
                    <input
                        type="text"
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                    />
                    <button
                        onClick={() => {
                            quiz.scoreKeeper(userAnswer, q);
                            setUserAnswer('');
                            onNextClick();
                        }}
                    >
                        Next
                    </button>
                </div>
            ); 
        }
        // if there are no more questions, disable the next button and show the final score
        {
            document.getElementById('nextButton').disabled = true;
            return (
                <div>
                    <h1>
                        Quiz complete! Your score is {score} out of {questionNum}.
                    </h1>
                </div>
            );
        }
    }

    // add event listener to the next button to show the next question when clicked
    const onNextClick = useEffect(() => {
        const btn = document.getElementById('nextButton');
        if (btn) btn.addEventListener('click', showQuestion);
        return () => {
            if (btn) btn.removeEventListener('click', showQuestion);
        };
    }, []);

    return <div>Click "Next" to start.</div>;
}

export default QuizPage;