import React, { useState } from 'react'
import './App.css';
import Form from './components/Form';

function App() {
  const [team, setTeam] = useState([]);
  const [formValue, setFormValue] = useState({name: '', email: '', role: ''});

  const updateForm = (name, value) => {
    setFormValue({...formValue, [name]:value})
  };

  const submitForm = () => {
    const newTeamMember = {
      name: formValue.name.trim(),
      email: formValue.email.trim(),
      role: formValue.role
    }
    setTeam([newTeamMember, ...team]);
    setFormValue({name: '', email: '', role: ''})
  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form 
        values = {formValue}
        change = {updateForm}
        submit = {submitForm}        
      />
    </div>
  );
}

export default App;