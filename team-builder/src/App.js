import React, {useState, useEffect} from 'react';
import { v4 as uuid } from 'uuid'
import './App.css';


const initialTeamMembers = [
  {
    id: uuid(),
    name:'Diamond',
    email:'diamond@gmail.com',
    role:'Student',

  },
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
 
  const [team, setTeam] = useState([])

  const [formValues, setFormValues] = useState( initialFormValues)

  const updateForm = (inputName, inputValue) => {

    const updatedFormvalues = {...formValues, [inputName]: inputValue}
    setFormValues(updatedFormvalues)
  }

  const submitForm = () => {

    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role)return
  }
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
