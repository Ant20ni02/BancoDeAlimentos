import '../../styles/CheckboxQuestion.css';

const CheckboxQuestionSpecial = ({ question/* , answer, onChange */ }) => {
    /* const [checked, setChecked] = useState(false); */

    /* useEffect(() => {
        onChange(checked);
    }, [checked]);
 */
    return (
        <>
            <div className="checkbox-question">
                <span className='question-checkbox'>{question.question}</span>
                {
                    question.options.map((option) => {
                        return (
                            <div className="checkbox-answer">
                                <label className="answer-label">{option.label}</label>
                                <p className="answer-checkbox">{option.input}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default CheckboxQuestionSpecial;
