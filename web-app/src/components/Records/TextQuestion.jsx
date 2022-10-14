import '../../styles/TextQuestion.css';

const TextQuestion = ({ question }) => {
    return (
        <>
            <div className="text-question">
                <span className='question-text'>{question.question}</span>
                <p className='answer-text'>{question.answer}</p>
            </div>
        </>
    );
}

export default TextQuestion;
