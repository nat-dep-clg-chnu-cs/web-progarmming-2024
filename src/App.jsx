
import Header from "./components/Header.jsx";
import FeedbackData from "./data/FeedbackData.js";
import {useState} from "react";
import FeedBackList from "./components/FeedBackList.jsx";
import FeedbackStat from "./components/FeedbackStat.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import { v4 as uuidv4 } from 'uuid';


function App() {
    const [feedbacks, setFeedbacks] = useState(FeedbackData)

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedbacks([newFeedback, ...feedbacks])

    }

    const deleteFeedback = (id) => {
        if(window.confirm('Ви впевнені, що хочете видалити цей важливий відгук??')
        ){
            setFeedbacks(feedbacks.filter(msg => msg.id !== id))
        }

    }



  return (
    <>
        <Header />
        <div className="container">
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackStat feedbacks={feedbacks} />
            <FeedBackList feedbacks={feedbacks} handleDelete={deleteFeedback}/>
        </div>

    </>
  )
}

export default App
