import {createContext, useEffect, useState} from "react";
import FeedbackData from "../data/FeedbackData.js";
import {v4 as uuidv4} from "uuid";
import getDataFromGoogleApp from "../data/Utils.js";

const FeedbackContext = createContext()

const googleUrl = import.meta.env.VITE_apiURL

export const FeedbackProvider = ({children}) => {

    const [feedbacks, setFeedbacks] = useState([])
    const [isLoading, setIsloading] = useState(true)

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(()=>{
        // console.log('Context render')

        fetchFeedback()
        // fetchThema()

    },[])

    const deleteFeedback = async (id) => {
        if(window.confirm('Ви впевнені, що хочете видалити цей важливий відгук??')
        ){
            // const response = await fetch(`http://localhost:3000/feedbacks/${id}`, {
            //     method: "DELETE"
            // })
            // const data = await response.json()
            //
            // console.log("DELETE", data)
            //
            // setFeedbacks(feedbacks.filter(msg => msg.id !== id))

            getDataFromGoogleApp(`${googleUrl}?method=DELETE&id=${id}`).then(data => {
                // console.log('Data from Google',data)
                setFeedbacks(data.feedbacks)
                // setIsloading(false)
            })
        }

    }

    const fetchFeedback = async () => {

        getDataFromGoogleApp(`${googleUrl}?method=GET`).then(data => {
            // console.log('Data from Google',data)
            setFeedbacks(data.feedbacks)
            setIsloading(false)
        })


    }

    const fetchThema = async () => {
        const response = await fetch('http://localhost:3000/thema')
        const data = await response.json()
        console.log('thems', data)
    }

    const addFeedback = async (newFeedback) => {


        newFeedback.id = uuidv4()
        getDataFromGoogleApp(`${googleUrl}?method=POST&id=${newFeedback.id}&rating=${newFeedback.rating}&text=${newFeedback.text}`).then(data => {
            // console.log('Data from Google',data)
            setFeedbacks(data.feedbacks)
            // setIsloading(false)
        })


    }

    const updateFeedback = async (id, updItem) => {
        const response = await fetch(`http://localhost:3000/feedbacks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json()
        setFeedbacks(feedbacks.map(item => item.id === id ? {...item, ...data } : item))
        setFeedbackEdit({
            item: {},
            edit: false,
        })
    }

    const editFeedback = (item) => {
        setFeedbackEdit({item, edit: true})
    }


    return <FeedbackContext.Provider value={{
        feedbacks,
        deleteFeedback,
        addFeedback,
        updateFeedback,
        editFeedback,
        feedbackEdit,
        isLoading,
    }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext
