import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const [boolean, setBoolean] = useState(false)

    function handleChange(event) {
        const { name, value } = event.target;
        return (setNote(function (prevValue) {
            return ({
                ...prevValue,
                [name]: value
            })
        }))
    }

    function textClick() {
        return (setBoolean(true))
    }

    return (
        <div>
            <form className="create-note">
                {boolean && <input onChange={handleChange} name="title" value={note.title} placeholder="Title" />

                }
                <textarea onClick={textClick} onChange={handleChange} name="content" value={note.content}
                    placeholder="Take a note..." rows={boolean ? "3" : "1"} />
                <Zoom in={boolean}>
                    <Fab onClick={(event) => {
                        props.onClicked(note)
                        event.preventDefault();
                    }}><AddIcon /></Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
