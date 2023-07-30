import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [finalNote, setFinalNote] = useState([])

    function addItem(note) {
        return setFinalNote((prevValue => {
            return [...prevValue, note]
        }))
    }

    function deleteItem(id) {
        return (setFinalNote(function (prevNote) {
            return (prevNote.filter(function (item, index) {
                return (index !== id)
            }))
        }))
    }

    return (
        <div>
            <Header />
            <CreateArea onClicked={addItem} />
            {finalNote.map(function (singleNote, index) {
                return <Note onDeleted={deleteItem} key={index} id={index} title={singleNote.title} content={singleNote.content} />
            })}
            <Footer />
        </div>
    );
}

export default App;
