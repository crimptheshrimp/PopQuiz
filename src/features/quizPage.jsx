import React from 'react';
import {quiz, questionPicker, questions, answers, scoreKeeper} from './quiz';
import useState from 'react';

//hosts the logic for the quiz page, properly displaying them

const QuizPage = () => {
    const [userAnswer, setUserAnswer] = useState('');
    let questionNum = 0;
    let score = 0;
    const remaining = [...quiz.questions];

    function showQuestion() {
        if (remaining.length === 0) {
            document.getElementById('nextButton').disabled = true;
            return (
                <div>
                    <h1>
                        Quiz complete! Your score is {score} out of {quiz.questions.length}.
                    </h1>
                </div>
            )
        } ;
        const q = quiz.questionPicker(remaining);
        return (
            <div>
                <h1>{quiz.questions[q]}</h1>
            </div>
        )
        questionNum++;
    }

    document.getElementById('nextButton').addEventListener('click', showQuestion);
}

export default QuizPage;