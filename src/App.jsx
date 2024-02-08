import Hello from "./components/Hello"
import Header from "./components/Header.jsx";


function App() {
    const msg = "Comment"
    const showComment = true

    const loading = false
    const feedbacks = [
        {
            id: 1,
            text: 'Comment 1',
        },
        {
            id: 2,
            text: 'Comment 2',
        },
        {
            id: 3,
            text: 'Comment 3',
        },
    ]

    const text = 'TEXT456'

    if (loading) return (<div style={{backgroundColor: 'red'}}>Loading...</div>)


  return (
    <>
        <Header />
        {showComment && msg }

        <h3>Коментарі: {feedbacks.length}</h3>
      {/*<Hello />*/}
        {showComment && (<>
            <ul>
                {feedbacks.map((val) => {
                    return (
                        <li key={val.id}>{val.id} : {val.text}</li>
                    )
                })}
            </ul>
        </>)}
    </>
  )
}

export default App
