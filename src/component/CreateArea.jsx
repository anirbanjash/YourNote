import React, { useState } from "react";
import AddCardIcon from '@mui/icons-material/AddCard';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
function CreateArea(props) {

    const[note,setNote]=useState({
        title:"",
        content:""
    })
    function handleChange(event){
        const{name,value}=event.target
        setNote(prevNote =>{
            return{
                    ...prevNote,
                    [name]:value
            };
        })
    }
    function submitNote(event){
        props.onAdd(note)
        
        setNote({
            title:"",
            content:""
        });
        event.preventDefault(); 
        }
      const[isExpand,setExpand]=useState(false);
      function expand(){
        setExpand(true)
      }
     
  return (
    <div>
      <form className="create-note">
      { isExpand? <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />: null }  
        <textarea onClick={expand} name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows={isExpand ? 3:1} />
       <Fab onClick={submitNote}><AddCardIcon/></Fab> 
      </form>
    </div>
  );
}

export default CreateArea;
