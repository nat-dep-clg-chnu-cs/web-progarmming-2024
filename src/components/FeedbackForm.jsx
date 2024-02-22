
import Card from "../shared/Card.jsx";
import {useState} from "react";
import Button from "../shared/Button.jsx";
import RatingSelect from "./RatingSelect.jsx";

const FeedbackForm = ({handleAdd}) => {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const handleTextChange = (e) => {


        if (text === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 8){
            setMessage('Текст повинен містити щонайменше 10 символів')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text.trim().length > 0){
            const newFeedback = {
                text,
                rating,
            }

            handleAdd(newFeedback)
            setText('')
        }

    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Дайте оцінку нашому курсу</h2>
                <RatingSelect />
                <div className="input-group">
                    <input
                        onChange={handleTextChange}
                        type="text"
                        placeholder={'Напишіть відгук'}
                        value={text}
                    />
                    <Button type={'submit'} isDisable={btnDisabled}>Надіслати</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>


        </Card>
    );
};

export default FeedbackForm;
