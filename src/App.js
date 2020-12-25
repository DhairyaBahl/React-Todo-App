import './App.css';
import {useState,useEffect} from 'react';
import {InputLabel, Button, Input, FormControl} from '@material-ui/core';
import Todo from './Todo.js';
import db from './firebase.js';
import firebase from "firebase";

function App() {
    
    const [todos,setTodos]=useState([]);
    const [input,setInput]=useState("");
    
    useEffect(()=>{
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))})
},[])
    
    const AddMe=(event)=>{
        event.preventDefault();
 db.collection('todos').add({todo:input,timestamp:firebase.firestore.FieldValue.serverTimestamp()})
        setInput("");
    }
    
    const Delete=(n)=>{
        db.collection('todos').doc(n.id).delete();
    }
    
  return (
    <div className="App">
    <h1>👑 My Todo App 👑</h1>
    <form>
    <FormControl>
    <InputLabel>Write A Todo ✅</InputLabel>
    <Input value={input} onChange={event=>setInput(event.target.value)} />
    </FormControl>
    <Button type="submit" onClick={AddMe} variant="contained" color="primary" disabled={input===""} >Add Me</Button>
    </form>
    {
        todos.map(user=>(<div><Todo todo={user} /><Button variant="contained" color="secondary" onClick={(event)=>Delete(user)} > Delete Me</Button></div> ))
    }    
    </div>
  );
}

export default App;