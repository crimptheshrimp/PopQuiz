//Shows all quiz questions and answers and contains the function to keep score and to randomise the order

let questions = ["Who was the most listened artist in 2017?", "Who performs the song Lean On from 2015?", "What music developed out of the UK rave scene and Jamaican sound system culture?"]

let answers = ["ed sheeran", "dj snake, major lazer", "jungle"]

const scoreKeeper = (userAnswer, questionNum) => {
    if (userAnswer.toLowerCase() === answers[questionNum]) {
        score++
    }
}

const questionPicker = (arr, ans) => {
    const q = Math.floor(Math.random() * arr.length) ;
    arr.splice(arr.indexOf(q), 1);
    ans.splice(ans.indexOf(q), 1);
    return q;
}

export default {questions, answers, questionPicker, scoreKeeper}