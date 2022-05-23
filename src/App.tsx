import React from 'react';
import './App.css';
import { SharedState } from './hooks/useShareState';
import { SetNewUser } from './setNewUser';

function App() {
  const {user} = SharedState();
    return (<>
    <div className="App"><b>First Name:</b> {user.firstName} <b>Last Name:</b> {user.lastName}</div>
    <SetNewUser/>
    </>);
}

export default App;
