import Card from "../shared/Card.jsx";
import {FaTimes} from "react-icons/fa";
import {useState} from "react";


const FeedBackItem = ({item, handleDelete}) => {
    const [rating, setRating] = useState(item.rating)
    const [text, setText] = useState(item.text)

    return (
        <Card>
            <div className="num-display"> {rating}</div>
            <button className="close" onClick={()=>handleDelete(item.id)}>
                <FaTimes color="purple" />
            </button>
            <div className="text-display">{text}</div>
        </Card>
    );
};

export default FeedBackItem;
