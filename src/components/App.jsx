import React from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import { useState } from 'react';

function App() {

    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        // console.log(note);
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id){
        // console.log("Delete triggered")
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) =>{
                return index !== id;
            });
        });
    }

    return <div>
        <Header />
        <CreateArea onAdd= {addNote}/>
         {notes.map((noteItem, index) => {
            return <Note 
                key = {index}
                id = {index}
                title = {noteItem.title}
                content = {noteItem.content}
                onDelete = {deleteNote}
            />
         })}
        <Footer />
    </div>
}

export default App;
